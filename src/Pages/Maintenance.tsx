import { MaintenanceImage } from "../Components/assets";
import "./Maintenance.css";

const Maintenance: React.FC = () => {
  return (
    <>
      <section className="maintenance">
        <div>
          <h1 className="maintenance-title">Página en mantenimiento</h1>
          <h3 className="maintenance-subtitle">Por favor regrese más tarde</h3>
          <figure>
            <img
              className="maintenance-image"
              src={MaintenanceImage}
              alt="Página en mantenimiento"
            />
          </figure>
        </div>
      </section>
    </>
  );
};

export default Maintenance;
