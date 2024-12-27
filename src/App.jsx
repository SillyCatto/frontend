export default function App() {
  const showModal = () => {
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      modal.showModal();
    }
  };

  return (
    <div>
      <button className="btn btn-primary" onClick={showModal}>
        Click Me!
      </button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">
            Press ESC key or click the button below to close
          </p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
