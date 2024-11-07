import "./index.scss";
import {
  Breadcrumb,
  Button,
  Checkbox,
  Label,
  Modal,
  Table,
  TextInput,
  Dropdown,
  FileInput
} from "flowbite-react";
import {
  HiChevronLeft,
  HiChevronRight,
  HiCog,
  HiDocumentDownload,
  HiDotsVertical,
  HiExclamationCircle,
  HiHome,
  HiOutlineExclamationCircle,
  HiOutlinePencilAlt,
  HiPlus,
  HiTrash,
} from "react-icons/hi";
import { useEffect, useState } from "react";
import { usersListDummy } from "../../utilize/DummyData";
import ModalForm from "./ModalForm";
import Swal from "sweetalert2";

const Users = () => {
  // State untuk mengontrol visibilitas modal
  const [userList, setUserList] = useState(usersListDummy);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [titleModal, setTitleModal] = useState('detail_form');

  const handleDetailModal = () => {
    setIsModalOpen(true);
    setTitleModal('detail_form')
  };
  const handleEditModal = () => {
    setIsModalOpen(true);
    setTitleModal('edit_form')
  };

  // Fungsi untuk membuka modal
  const handleCreateModal = () => {
    setIsModalOpen(true);
    setTitleModal('create_form')
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTitleModal('detail_form')
  };

  const handleDelete = (id) =>{
    return Swal.fire({
        title: "Are you sure want delete this data ? ",
        showCancelButton: true,
        confirmButtonColor:"#1874e7",
        confirmButtonText: "Yes",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                // dispatch(deleteInvitationService(id))
            } 
    });
  }
  return (
    <>
      <div className="flex flex-col h-full w-full mt-8">
        <div className="sm:flex flex-row mb-5">
          <div className="mb-3 items-center dark:divide-gray-700 sm:mb-0 sm:flex sm:divide-x sm:divide-gray-100">
            <div className="lg:pr-3 lg:space-x-2 flex flex-col lg:flex-row">
              <div className="relative mt-1 w-full lg:w-48">
                <TextInput
                  id="users-search"
                  name="users-search"
                  placeholder="First Name"
                />
              </div>
              <div className="relative mt-1 w-full lg:w-48">
                <TextInput
                  id="users-search"
                  name="users-search"
                  placeholder="Last Name"
                />
              </div>
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-2 lg:space-x-3">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 w-full ">
              RESET
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600  w-full">
              APPLY
            </button>
            <Dropdown label="Action" dismissOnClick={false}>
              <Dropdown.Item onClick={handleCreateModal}>Add User</Dropdown.Item>
              <Dropdown.Item>Export</Dropdown.Item>
            </Dropdown>
          </div>
        </div>
        <div className="flex flex-col w-full h-full overflow-x-auto overflow-y-auto mb-10">
         <div className="flex flex-col">
          <Table className="min-w-full divide-y divide-gray-200 dark:divide-gray-600">
            <Table.Head className="bg-gray-100 dark:bg-gray-700">
                <Table.HeadCell>
                <Label htmlFor="select-all" className="sr-only">
                    Select all
                </Label>
                <Checkbox id="select-all" name="select-all" />
                </Table.HeadCell>
                <Table.HeadCell>First Name</Table.HeadCell>
                <Table.HeadCell>Last Name</Table.HeadCell>
                <Table.HeadCell>Email</Table.HeadCell>
                <Table.HeadCell className="text-center">Actions</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y divide-gray-200 bg-white dark:divide-gray-700 dark:bg-gray-800 pb-10">
                {
                    userList?.data?.length>0 && userList?.data?.map((item, index)=>{
                        return (
                            <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700" key={index}>
                                <Table.Cell className="w-4 p-4">
                                <div className="flex items-center">
                                    <Checkbox aria-describedby="checkbox-1" id="checkbox-1" />
                                    <label htmlFor="checkbox-1" className="sr-only">
                                    checkbox
                                    </label>
                                </div>
                                </Table.Cell>
                                <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                                <img
                                    className="h-10 w-10 rounded-full"
                                    src={item.avatar}
                                    alt={item.first_name}
                                />
                                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                    {item.first_name}
                                </div>
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                                    {item.last_name}
                                </Table.Cell>
                                <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                                    {item.email}
                                </Table.Cell>
                                <Table.Cell>
                                <div className="flex w-full items-center justify-center gap-x-3 whitespace-nowrap">
                                    <a className="text-green-600 hover:underline mr-4 cursor-pointer" onClick={handleDetailModal}>
                                        <span className="material-symbols-outlined">visibility</span>
                                    </a>
                                    <a className="text-amber-600 hover:underline mr-4 cursor-pointer">
                                    <span className="material-symbols-outlined" onClick={handleEditModal}>edit</span>
                                    </a>
                                    <a className="text-red-600 hover:underline mr-4 cursor-pointer">
                                    <span className="material-symbols-outlined" onClick={handleDelete}>delete</span>
                                    </a>
                                </div>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })
                }
                <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700 mb-10">
                <Table.Cell colSpan={5} className="w-4 p-4 ">
                    <div className="flex items-start w-full">
                        <PaginationComponent userList={userList}></PaginationComponent>
                    </div>
                </Table.Cell>
                </Table.Row>
            </Table.Body>
            </Table>
          </div>
        </div>
      </div>
      <>
            <ModalForm 
                isOpen = {isModalOpen}
                titleModal = {titleModal}
                modalClose={handleCloseModal}
            ></ModalForm>
        </>
    </>
  );
};

export const PaginationComponent = function (props) {
    const {userList} = props
  return (
    <div className="sticky right-0 bottom-0 w-full items-center bg-white dark:border-gray-700 dark:bg-gray-800 sm:flex sm:justify-between">
      <div className="flex items-center sm:mb-0">
        <a
          href="#"
          className="inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Previous page</span>
          <HiChevronLeft className="text-2xl" />
        </a>
        <a
          href="#"
          className="mr-2 inline-flex cursor-pointer justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span className="sr-only">Next page</span>
          <HiChevronRight className="text-2xl" />
        </a>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            { ((userList?.page * userList?.per_page)- userList?.per_page)+1} - {userList?.page * userList?.per_page}
          </span>
          &nbsp;of&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            {userList?.total}
          </span>
        </span>
      </div>
    </div>
  );
};

const AddUserModal = function () {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    console.log("terbuka modal= ");
    console.log(isOpen);
  }, [isOpen]);
  return (
    <>
      <div className="cursor-pointer" onClick={() => setOpen(true)}>
        <div className="flex items-center gap-x-3">
          <HiPlus className="text-xl" />
          Add user
        </div>
      </div>
      <Modal onClose={() => setOpen(false)} show={isOpen}>
        <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
          <strong>Add new user</strong>
        </Modal.Header>
        <Modal.Body>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="firstName">First name</Label>
              <div className="mt-1">
                <TextInput
                  id="firstName"
                  name="firstName"
                  placeholder="Bonnie"
                />
              </div>
            </div>
            <div>
              <Label htmlFor="lastName">Last name</Label>
              <div className="mt-1">
                <TextInput id="lastName" name="lastName" placeholder="Green" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1">
            <div>
                <Label htmlFor="email">Email</Label>
                <div className="mt-1">
                    <TextInput
                    id="email"
                    name="email"
                    placeholder="example@company.com"
                    type="email"
                    />
                </div>
            </div>
            <div>
                <div className="mb-2 block">
                    <Label htmlFor="file-upload" value="Upload file" />
                </div>
                <FileInput id="file-upload" />
            </div>

         </div>
        </Modal.Body>
        <Modal.Footer>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 w-full ">
              Submit
            </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Users;
