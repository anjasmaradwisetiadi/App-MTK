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
  FileInput,
  Spinner
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
import React, { useEffect, useState, useMemo } from "react";
import { usersListDummy } from "../../utilize/DummyData";
import { 
    getDetailUsersService, 
    getListUsersService, 
    deleteUsersService, 
    filterUserService
} from "../../service/Users";
// import { getListUsersService } from "../../store/Users/Users";
import ModalForm from "./ModalForm";
import Swal from "sweetalert2";
import { useDispatch, useSelector,  } from "react-redux";
import { successHandle } from "../../utilize/SuccessHandle";
import { 
    createUsersResponseReducer,
    updateUsersResponseReducer,
    deleteUsersResponseReducer 
} from "../../store/Users/Users";

const Users = () => {
  const dispatch = useDispatch();
  // State untuk mengontrol visibilitas modal
  const [userList, setUserList] = useState(usersListDummy);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [titleModal, setTitleModal] = useState("detail_form");
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [isFilter, setIsFilter] = useState(false);
  const [filterFirstName, setFilterFirstName] = useState('');
  const [filterLastName, setFilterLastName] = useState('');
//   const [getListUsers, setGetListUsers] = useState(null);

  const getListUsers = useSelector((state) => state.users.usersList );
  const getCreateResponse = useSelector((state) => state.users.createResponse);
  const getUpdateResponse = useSelector((state) => state.users.updateResponse);
  const getDeleteResponse = useSelector((state) => state.users.deleteResponse);
  const getLoading = useSelector((state) => state.users.loading);
  const getLoadingForm = useSelector((state) => state.users.loadingForm);

  useEffect(() => {
    dispatch(getListUsersService(pagePayload())); // Anda bisa menambahkan payload jika diperlukan
  }, [dispatch]);

  const pagePayload = (
    page = 1, 
    per_page = 10
) => {
    let concatFilterParams = "";
    let urlParams = new URLSearchParams(concatFilterParams.search);
    if (page > 0) {
      urlParams.set("page", page);
    }
    if (per_page > 0) {
      urlParams.set("per_page", per_page);
    }

    return {
      concatFilterParams: urlParams.toString(),
    };
  };

  const payload = useMemo(() => pagePayload(), [page, perPage]);

  const handleDetailModal = (id) => {
    setIsModalOpen(true);
    setTitleModal("detail_form");
    dispatch(getDetailUsersService(id))
  };
  const handleEditModal = (id) => {
    setIsModalOpen(true);
    setTitleModal("edit_form");
    dispatch(getDetailUsersService(id))
  };

  // Fungsi untuk membuka modal
  const handleCreateModal = () => {
    setIsModalOpen(true);
    setTitleModal("create_form");
  };

  // Fungsi untuk menutup modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTitleModal("detail_form");
  };

  const handleDelete = (id) => {
    return Swal.fire({
      title: "Are you sure want delete this data ? ",
      showCancelButton: true,
      confirmButtonColor: "#1874e7",
      confirmButtonText: "Yes",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        dispatch(deleteUsersService(id))
      }
    });
  };

  const handleFilter = ()=>{
    if(filterFirstName.length || filterLastName.length){
      setIsFilter(true)
      const payloadFilter = {
        filter_first_name: filterFirstName,
        filter_last_name: filterLastName,
      }
      dispatch(filterUserService(pagePayload(1,100), payloadFilter))
    } else {
      setIsFilter(false)
      dispatch(getListUsersService(pagePayload()))
    }
  }

  const handleReset = ()=>{
    setIsFilter(false)
    setFilterFirstName('')
    setFilterLastName('')
    setPage(1);
    setPerPage(10);
    dispatch(getListUsersService(pagePayload()))
  }

  useEffect(()=>{
    if(!getLoadingForm && getCreateResponse){
        successHandle.successSwalData('create');
        dispatch(createUsersResponseReducer(null));
        dispatch(getListUsersService(pagePayload()));
    } else if(!getLoadingForm && getUpdateResponse){
        successHandle.successSwalData('edit');
        dispatch(updateUsersResponseReducer(null));
        dispatch(getListUsersService(pagePayload()))
    } if(!getLoadingForm && getDeleteResponse) {
        successHandle.successSwalData('delete');
        dispatch(deleteUsersResponseReducer(null));
        dispatch(getListUsersService(pagePayload()))
    } else {
        return 
    }
},[getCreateResponse, getUpdateResponse, getDeleteResponse, getLoading])


  return (
    <>
      <div className="flex flex-col h-full w-full mt-8">
        <div className="sm:flex flex-row mb-5">
          <div className="mb-3 items-center dark:divide-gray-700 sm:mb-0 sm:flex sm:divide-x sm:divide-gray-100">
            <div className="lg:pr-3 lg:space-x-2 flex flex-col lg:flex-row">
              <div className="relative mt-1 w-full lg:w-48">
                <TextInput
                  id="first-name-filter"
                  name="first-name-filter"
                  placeholder="First Name"
                  value={filterFirstName}
                  onChange={(e)=>{setFilterFirstName(e.target.value)}}
                />
              </div>
              <div className="relative mt-1 w-full lg:w-48">
                <TextInput
                  id="last-name-filter"
                  name="last-name-filter"
                  placeholder="Last Name"
                  value={filterLastName}
                  onChange={(e)=>{setFilterLastName(e.target.value)}}
                />
              </div>
            </div>
          </div>

          <div className="ml-auto flex items-center space-x-2 lg:space-x-3">
            <button 
              onClick={handleReset}
              className="bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800 w-full ">
              Reset
            </button>
            <button 
              onClick={handleFilter}
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600  w-full">
              Filter
            </button>
            <Dropdown label="Action" dismissOnClick={false}>
              <Dropdown.Item onClick={handleCreateModal}>
                Add User
              </Dropdown.Item>
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
                    getLoading &&
                    <Table.Row className="hover:bg-gray-100 dark:hover:bg-gray-700 mb-10">
                        <Table.Cell colSpan={5} className="w-4 p-4 ">
                            <div className="flex items-center w-full h-full justify-center ">
                                <Spinner aria-label="loading spinner" size="lg" />
                            </div>
                        </Table.Cell>
                    </Table.Row>   
                }
                {
                    !getLoading && getListUsers?.data?.map((item, index) => {
                        return (
                        <Table.Row
                            className="hover:bg-gray-100 dark:hover:bg-gray-700"
                            key={index}
                        >
                            <Table.Cell className="w-4 p-4">
                            <div className="flex items-center">
                                <Checkbox
                                aria-describedby="checkbox-1"
                                id="checkbox-1"
                                />
                                <label htmlFor="checkbox-1" className="sr-only">
                                checkbox
                                </label>
                            </div>
                            </Table.Cell>
                            <Table.Cell className="mr-12 flex items-center space-x-6 whitespace-nowrap p-4 lg:mr-0">
                            <img
                                className="h-10 w-10 rounded-full"
                                src={item?.avatar}
                                alt={item?.first_name}
                            />
                            <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                {item?.first_name}
                            </div>
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                              {item?.last_name}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap p-4 text-base font-medium text-gray-900 dark:text-white">
                              {item?.email}
                            </Table.Cell>
                            <Table.Cell>
                            <div className="flex w-full items-center justify-center gap-x-3 whitespace-nowrap">
                                <a
                                className="text-green-600 hover:underline mr-4 cursor-pointer"
                                onClick={()=>handleDetailModal(item?.id)}
                                >
                                <span className="material-symbols-outlined">
                                    visibility
                                </span>
                                </a>
                                <a className="text-amber-600 hover:underline mr-4 cursor-pointer">
                                <span
                                    className="material-symbols-outlined"
                                    onClick={()=>handleEditModal(item?.id)}
                                >
                                    edit
                                </span>
                                </a>
                                <a className="text-red-600 hover:underline mr-4 cursor-pointer">
                                <span
                                    className="material-symbols-outlined"
                                    onClick={()=>handleDelete(item?.id)}
                                >
                                    delete
                                </span>
                                </a>
                            </div>
                            </Table.Cell>
                        </Table.Row>
                        );
                    })
                }
                {
                    !getLoading
                    && !isFilter
                    && getListUsers?.data?.length > 0 && 
                    <Table.Row className=" mb-10">
                        <Table.Cell colSpan={5} className="w-4 p-4 ">
                        <div className="flex items-start w-full">
                            <PaginationComponent
                            userList={getListUsers}
                            ></PaginationComponent>
                        </div>
                        </Table.Cell>
                    </Table.Row>   
                } 
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
      {/* modal Form */}
      <>
        <ModalForm
          isOpen={isModalOpen}
          titleModal={titleModal}
          modalClose={handleCloseModal}
        ></ModalForm>
      </>
    </>
  );
};


export const PaginationComponent = function (props) {
  const { userList } = props;
  const dispatch = useDispatch();

  const nextPage = (event) =>{
    dispatch(getListUsersService(pagePayload(userList?.page+1, 10)));
  }

  const previousPage = (event) =>{
    dispatch(getListUsersService(pagePayload(userList?.page-1, 10)));
  }

  const pagePayload = (
    page = 1, 
    per_page = 10
) => {
    let concatFilterParams = "";
    let urlParams = new URLSearchParams(concatFilterParams.search);
    if (page > 0) {
      urlParams.set("page", page);
    }
    if (per_page > 0) {
      urlParams.set("per_page", per_page);
    }

    return {
      concatFilterParams: urlParams.toString(),
    };
  };

  return (
    <div className="sticky right-0 bottom-0 w-full items-center bg-white dark:border-gray-700 dark:bg-gray-800 sm:flex sm:justify-between">
      <div className="flex items-center sm:mb-0">
        <button
          onClick={previousPage}
          disabled={userList?.page === 1}
          role="button"
          type="button"
          className="inline-flex justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:text-gray-200"
        >
          <span className="sr-only">Previous page</span>
          <HiChevronLeft className="text-2xl" />
        </button>
        <button
          onClick={nextPage}
          disabled={userList?.page === userList?.total_page}
          role="button"
          type="button"
          className="mr-2 inline-flex justify-center rounded p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:text-gray-200"
        >
          <span className="sr-only">Next page</span>
          <HiChevronRight className="text-2xl" />
        </button>
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing&nbsp;
          <span className="font-semibold text-gray-900 dark:text-white">
            {userList?.page * userList?.per_page - userList?.per_page + 1} -{" "}
            {userList?.page * userList?.per_page}
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

export default Users;
