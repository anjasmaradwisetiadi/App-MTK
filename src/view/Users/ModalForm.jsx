import { useEffect, useState } from "react";
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
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";

const ModalForm = (props)=>{
    const { isOpen, titleModal  } = props 
    const loadingForm = false

    useEffect(() => {
      console.log("terbuka modal= ");
      console.log(isOpen);
    }, [isOpen]);

    const ContainCreateModal = () =>{
        return (
            <Modal onClose={() =>  props.modalClose(false)} show={isOpen}>
            <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
              <strong>
                {
                    titleModal === 'create_form' && ('Add new user')
                }
                {
                    titleModal === 'edit_form' && ('Edit user')
                }
                {
                    titleModal === 'detail_form' && ('Detail user')
                }
                </strong>
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
        )
    }

    //******* */ for condition want display modal appreance
    if (loadingForm) {
        return <LoadingComponent></LoadingComponent>
    } else if (!loadingForm
        && (titleModal === 'create_form'
            || titleModal === 'edit_form'
            || titleModal === 'detail_form'
        )) {
        return <ContainCreateModal></ContainCreateModal>
    } else {
        return <ContainCreateModal></ContainCreateModal>
    }
}

export default ModalForm