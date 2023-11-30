import useModal from "@/hooks/useModal";
import Aside from "./Aside";
import BarberDetails from "./BarberDetails";
import TableTeamRow from "./TableTeamRow";
import { useAdminContext } from "@/context/AdminContext";

export default function TableTeam({ img, team, className }) {
  const { openModal, closeModal, isModalOpen } = useModal();
  const { setSelectedBarber, selectedBarber } = useAdminContext();

  return (
    <>
      <table className={` flex-col w-full  overflow-hidden ${className || ""}`}>
        <thead>
          <tr className="border-b-2 border-gray-200  bg-light-grey text-black text-left">
            <th className="py-3 px-3">Nombre y Apellido</th>
            <th className="py-3 px-3">Proximos turnos</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {team
            .sort((a, b) => a.id - b.id)
            .map((team) => (
              <TableTeamRow barber={team} openModal={openModal} />
            ))}
        </tbody>
      </table>
      {isModalOpen ? (
        <Aside
          title={
            <p>
              {selectedBarber.name}
              <span className="text-dark-grey ml-1">
                #00{selectedBarber.id || "a"}{" "}
              </span>{" "}
            </p>
          }
          closeModal={closeModal}
        >
          <BarberDetails />
        </Aside>
      ) : null}
    </>
  );
}
