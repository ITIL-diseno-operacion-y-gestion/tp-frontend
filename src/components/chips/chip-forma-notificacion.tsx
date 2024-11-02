import { FormaNotificacion } from "@/models/incidentes";

import {
  FileInput,
  Mail,
  MessageCircle,
  MessageSquareText,
  PhoneCall,
} from "lucide-react";

export function ChipFormaNotificacion({
  formaNotificacion,
}: {
  formaNotificacion: FormaNotificacion;
}) {
  return (
    <div className="inline-flex items-center gap-x-2">
      <Logo formaNotificacion={formaNotificacion} />
      {formaNotificacion}
    </div>
  );
}

const Logo = ({
  formaNotificacion,
}: {
  formaNotificacion: FormaNotificacion;
}) => {
  switch (formaNotificacion) {
    case "chat en vivo":
      return <MessageCircle size={16} />;
    case "email":
      return <Mail size={16} />;
    case "sms":
      return <MessageSquareText size={16} />;
    case "formulario web":
      return <FileInput size={16} />;
    case "llamada telefonica":
      return <PhoneCall size={16} />;
    default:
      return null;
  }
};
