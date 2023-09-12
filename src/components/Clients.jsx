import { clients } from "../constants";
import styles from "../style";

export default function Clients() {
  return (
    <section className={`${styles.flexCenter} m-4 `}>
      <div className={`${styles.flexCenter} w-full flex-wrap `}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}
          >
            <a
              href={client.link} // Assuming there's a link associated with each client
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer"
              className="relative inline-block"
            >
              <img
                src={client.logo}
                alt="client"
                className="sm:w-[192px] w-[100px] object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent rounded-full opacity-0 hover:opacity-20 transform hover:scale-110 transition-all duration-300"></div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
