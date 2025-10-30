import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { RecyclingPoint } from "@/types/recycling";

// Corrige ícones padrão do Leaflet em bundlers
try {
  // @ts-ignore
  delete (L.Icon.Default.prototype as any)._getIconUrl;
} catch {}
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png",
});

interface MapProps {
  points: RecyclingPoint[];
}

const Map = ({ points }: MapProps) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersLayerRef = useRef<L.LayerGroup | null>(null);
  const isFirstLoad = useRef(true);

  // Inicializa o mapa uma única vez
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Centro aproximado de Santo André (focado na região dos ecopontos)
    const center: L.LatLngExpression = [-23.6636, -46.5339];

    mapRef.current = L.map(mapContainerRef.current, {
      center,
      zoom: 12.5,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(mapRef.current);

    return () => {
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  // Atualiza marcadores quando os pontos mudarem
  useEffect(() => {
    if (!mapRef.current) return;

    // Remove camada anterior
    if (markersLayerRef.current) {
      markersLayerRef.current.remove();
      markersLayerRef.current = null;
    }

    // Se não há pontos, apenas mantém o centro padrão
    if (points.length === 0) return;

    const layer = L.layerGroup();

    points.forEach((p) => {
      const marker = L.marker([p.lat, p.lng]);
      const popupHtml = `
        <div style="min-width: 240px">
          <h3 style="margin: 0 0 6px; font-weight: 600; font-size: 14px;">${
            p.name
          }</h3>
          <div style="display:flex; gap:6px; align-items:center; margin-bottom:6px; font-size:12px; opacity:0.9;">
            <span>${p.neighborhood}</span>
          </div>
          <div style="display:flex; gap:6px; font-size:12px; margin:4px 0;">
            <span>📍</span>
            <span>${p.address}</span>
          </div>
          <div style="display:flex; gap:6px; font-size:12px; margin:4px 0;">
            <span>⏰</span>
            <span>${p.hours}</span>
          </div>
          ${
            p.phone
              ? `<div style="display:flex; gap:6px; font-size:12px; margin:4px 0;">
                   <span>📞</span>
                   <span>${p.phone}</span>
                 </div>`
              : ""
          }
        </div>
      `;
      marker.bindPopup(popupHtml, { closeButton: true });
      marker.addTo(layer);
    });

    layer.addTo(mapRef.current);
    markersLayerRef.current = layer;

    // Fit bounds em todos os pontos (exceto no primeiro carregamento)
    if (!isFirstLoad.current) {
      const bounds = L.latLngBounds(points.map((p) => [p.lat, p.lng] as [number, number]));
      mapRef.current.fitBounds(bounds, { padding: [50, 50] });
    } else {
      isFirstLoad.current = false;
    }
  }, [points]);

  return (
    <div className="w-full max-w-[80%] mx-auto h-[500px] rounded-lg overflow-hidden border border-border shadow-lg">
      <div ref={mapContainerRef} className="h-full w-full" />
    </div>
  );
};

export default Map;
