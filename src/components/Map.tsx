import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { RecyclingPoint } from "@/types/recycling";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Phone } from "lucide-react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icons in react-leaflet
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import iconRetina from "leaflet/dist/images/marker-icon-2x.png";

const DefaultIcon = L.icon({
  iconUrl: icon,
  iconRetinaUrl: iconRetina,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapProps {
  points: RecyclingPoint[];
}

// Component to fit bounds when points change
const MapBounds = ({ points }: { points: RecyclingPoint[] }) => {
  const map = useMap();
  
  useEffect(() => {
    if (points.length > 0) {
      const bounds = L.latLngBounds(
        points.map((point) => [point.lat, point.lng])
      );
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [points, map]);
  
  return null;
};

const Map = ({ points }: MapProps) => {
  // Santo André center coordinates
  const center: [number, number] = [-23.6636, -46.5339];

  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden border border-border shadow-lg">
      <MapContainer
        center={center}
        zoom={13}
        className="h-full w-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapBounds points={points} />
        
        {points.map((point) => (
          <Marker key={point.id} position={[point.lat, point.lng]}>
            <Popup className="custom-popup">
              <div className="p-2 min-w-[250px]">
                <h3 className="font-semibold text-base mb-2">{point.name}</h3>
                <Badge variant="secondary" className="mb-3">
                  {point.neighborhood}
                </Badge>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>{point.address}</span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <Clock className="h-4 w-4 mt-0.5 shrink-0" />
                    <span>{point.hours}</span>
                  </div>
                  
                  {point.phone && (
                    <div className="flex items-start gap-2">
                      <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                      <span>{point.phone}</span>
                    </div>
                  )}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
