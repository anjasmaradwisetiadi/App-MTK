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
    const { isOpen, titleModal  } = props;
    const loadingForm = false;
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setImage] = useState("")
    const [imagePreview, setImagePreview] = useState("")

    // ******** error state on form 
    const [firstNameError, setFirstNameError] = useState(true)
    const [lastNameError, setLastNameError] = useState(true)
    const [emailError, setEmailNameError] = useState(true)
    const [imageError, setImageNameError] = useState(true)

    useEffect(() => {
      console.log("terbuka modal= ");
      console.log(isOpen);
    }, [isOpen]);

    // const checkValidity = ()=>{
    //     const 
    //     return
    // }

    const handleSubmit = () =>{
        console.log("firstName:", firstName);
        console.log("lastName:", lastName);
        console.log("email:", email);
        console.log("image:", image);
        console.log("imagePreview:", imagePreview);
    }

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
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </div>
                  {
                    firstNameError && 
                    (<span className="invalid-feedback"> Please fill your first name</span>)
                  }
                </div>
                <div>
                  <Label htmlFor="lastName">Last name</Label>
                  <div className="mt-1">
                    <TextInput 
                    id="lastName" name="lastName" placeholder="Green" 
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}

                 />
                  </div>
                  {
                    lastNameError && 
                    (<span className="invalid-feedback"> Please fill your last name</span>)
                  }
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {
                    emailError && 
                    (<span className="invalid-feedback"> Please fill your mail</span>)
                  }
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="file-upload" value="Upload file" />
                    </div>
                    <FileInput id="file-upload" onChange={(e) => setImage(e.target.value)} />
                </div>
    
             </div>
            </Modal.Body>
            <Modal.Footer>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 w-full " onClick={handleSubmit}>
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