import Swal from "sweetalert2";
import Footer from "./components/Footer"
import Navigation from "./components/Navigation"
import TopBar from "./components/Topbar"
import { UsersIcon, ShoppingCartIcon, CurrencyDollarIcon, ScaleIcon } from '@heroicons/react/24/outline';
import Breadcrumb from "./components/Breadcrumb";
import NotificationBar from "./components/Notification";
import { ToastContainer } from "react-toastify";
import okToast from "./service/okToast";
import errToast from "./service/errToast";
import Modal from "./components/Modal";
import UserForm from "./components/UserForm";
import { useState } from "react";

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this data!',
      icon: 'warning',
      timer: 15000,
      showCancelButton: true,
      confirmButtonColor: '#10B981',
      cancelButtonColor: '#EF4444',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
    }).then((result) => {
      if (result.isConfirmed) {
        // Add your delete action here
        okToast('Deleted successfully')
        errToast('Delete failed')
        // Swal.fire('Deleted!', 'Your data has been deleted.', 'success');
        Swal.fire('Deleted!', 'Delete Error.', 'error');

      }
    }).catch(() => {
      errToast('Delete failed')
    });
  }

  const notification = 'New notification';
  const breadcrumbItems = [
    { label: 'Home', href: '#' },
    { label: 'Category', href: '#' },
    { label: 'Subcategory', href: '#' },
    { label: 'Current Page' }
  ];
  return (
    <div className="flex flex-col h-screen">
      <main className="w-full h-screen flex flex-row">
        <Navigation />
        {/*  <div className=" h-screen flex flex-col"> */}
        <section className="flex flex-col mt-5 mx-5 w-full gap-5">
          <TopBar title={'Dashboard'} />
          <Breadcrumb items={breadcrumbItems} />

          <div className="h-full overflow-y-auto hide-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-neutral-800/20 border border-neutral-500/50 rounded p-6 flex flex-col justify-center items-center shadow-lg">
                <UsersIcon className="h-10 w-10 text-neutral-200 mb-2" />
                <h2 className="text-lg font-semibold text-neutral-200 mb-2">Total Users</h2>
                <p className="text-3xl font-bold text-neutral-200">1000</p>
              </div>
              <div className="bg-neutral-800/20 border border-neutral-500/50 rounded p-6 flex flex-col justify-center items-center shadow-lg">
                <ShoppingCartIcon className="h-10 w-10 text-neutral-200 mb-2" />
                <h2 className="text-lg font-semibold text-neutral-200 mb-2">Total Orders</h2>
                <p className="text-3xl font-bold text-neutral-200">500</p>
              </div>
              <div className="bg-neutral-800/20 border border-neutral-500/50 rounded p-6 flex flex-col justify-center items-center shadow-lg">
                <CurrencyDollarIcon className="h-10 w-10 text-neutral-200 mb-2" />
                <h2 className="text-lg font-semibold text-neutral-200 mb-2">Total Revenue</h2>
                <p className="text-3xl font-bold text-neutral-200">$50,000</p>
              </div>
              <div className="bg-neutral-800/20 border border-neutral-500/50 rounded p-6 flex flex-col justify-center items-center shadow-lg">
                <ScaleIcon className="h-10 w-10 text-neutral-200 mb-2" />
                <h2 className="text-lg font-semibold text-neutral-200 mb-2">Average Order Value</h2>
                <p className="text-3xl font-bold text-neutral-200">$100</p>
              </div>
            </div>

            <NotificationBar notification={notification} />

          </div>
          <div>
            <button onClick={handleDelete} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
              Sweet Alert Test
            </button>
            <button
              onClick={() => setModalOpen(true)}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Open Modal
            </button>
          </div>

          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
            <UserForm />
          </Modal>
          <Footer />

        </section>

        {/* </div> */}

      </main >
      <ToastContainer />
    </div >

  )
}

export default App
