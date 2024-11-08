import { useEffect, useState,useRef } from "react";
import "./index.scss";
import {
  Label,
  Modal,
  TextInput,
  FileInput,
} from "flowbite-react";
import LoadingComponent from "../../components/LoadingComponent/LoadingComponent";
import {
  createUsersService,
  updateUsersService,
} from "../../service/Users";
import { useDispatch, useSelector } from "react-redux";
import { errorHandle } from "../../utilize/ErrorHandle";

const ModalForm = (props) => {
  const dispatch = useDispatch();
  const { isOpen, titleModal } = props;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [idUser, setIdUser] = useState(null)
  const imageElement = useRef(null);

  // ******** error state on form
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailNameError] = useState(false);
  const [imageError, setImageNameError] = useState(false);

  // ****** get state management
  const getDetailUser = useSelector((state) => state.users.detailResponse);
  const loadingForm = useSelector((state) => state.users.loadingForm);

  useEffect(() => {
    // ********** get detailresponse
    if (!loadingForm && getDetailUser && titleModal !== "create_form") {
      const data = getDetailUser;
      if (data) {
        // *********** get location firsttime
        setFirstName(data?.first_name);
        setLastName(data?.last_name);
        setEmail(data?.email);
        setIdUser(data?.id)
        // image preview agak nantian aja ....?
        setImage(data?.avatar);
        setImagePreview(data?.avatar);
      }
    }
  }, [getDetailUser, loadingForm]);

  const onImage = ($event) => {
    const dataImage = $event.target;
    if (dataImage.files) {
      setImagePreview(
        dataImage.files[0] ? URL.createObjectURL(dataImage.files[0]) : null
      );
      setImage(dataImage.files[0]);
    }
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);
    imageElement.current.value = null;
  };

  const handleSubmit = () => {
  
    if (!checkValidity()) {
      if (titleModal === "create_form") {
        const imageValidate = image ? false : true;
        setImageNameError(imageValidate)
        if(!imageValidate){
          let payload = {
            email: email,
            first_name: firstName,
            last_name: lastName,
            avatar: image,
          };
          dispatch(createUsersService(payload))
          modalClose()
        }else {
          errorHandle.errorMessage()
        }
      }
      else { 
        let payload = {
          email: email,
          first_name: firstName,
          last_name: lastName,
        };
        if(imagePreview){
            payload = {
              ...payload,
              avatar:image
            }
            dispatch(updateUsersService(idUser,payload))
            modalClose()
        } else {
          const imageValidate = image !== null ? false : true;
          setImageNameError(imageValidate)
          if(!imageValidate){
            payload = {
              ...payload,
              avatar:image
            }
            dispatch(updateUsersService(idUser,payload))
            modalClose()
          } else {
            errorHandle.errorMessage()
          }
        }
      }
    } else {
      errorHandle.errorMessage()
    }
  };

  const modalClose = () => {
    resetValidationForm();
    props.modalClose(!isOpen);
  };

  const checkValidity = () => {
    const firstNameValidate = firstName.length ? false : true;
    const lastNameValidate = lastName.length ? false : true;
    const emailValidate = email.length ? false : true;


    setFirstNameError(firstNameValidate);
    setLastNameError(lastNameValidate);
    setEmailNameError(emailValidate);

    return (
      firstNameValidate || lastNameValidate || emailValidate
    );
  };

  const resetValidationForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setImage(null);
    setImagePreview(null);
    setFirstNameError(false);
    setLastNameError(false);
    setEmailNameError(false);
    setImageNameError(false);
    imageElement.current.value = null;
  };

  //******* */ for condition want display modal appreance
  if (loadingForm) {
    return (<LoadingComponent></LoadingComponent>);
  } else {
    return (
      <Modal onClose={modalClose} show={isOpen}>
        <Modal.Header className="border-b border-gray-200 !p-6 dark:border-gray-700">
          <strong>
            {titleModal === "create_form" && "Add new user"}
            {titleModal === "edit_form" && "Edit user"}
            {titleModal === "detail_form" && "Detail user"}
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
                  placeholder="First name"
                  type="text"
                  value={firstName}
                  onChange={(e)=> setFirstName(e.target.value)}
                  disabled={titleModal === "detail_form"}
                />
              </div>
              {firstNameError && (
                <span className="invalid-feedback">
                  Please fill your first name
                </span>
              )}
            </div>
            <div>
              <Label htmlFor="lastName">Last name</Label>
              <div className="mt-1">
                <TextInput
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  disabled={titleModal === "detail_form"}
                />
              </div>
              {lastNameError && (
                <span className="invalid-feedback">
                  Please fill your last name
                </span>
              )}
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
                  disabled={titleModal === "detail_form"}
                />
              </div>
              {emailError && (
                <span className="invalid-feedback"> Please fill your mail</span>
              )}
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="file-upload" value="Upload file" />
              </div>
              <FileInput
                id="file-upload"
                accept="image/*"
                onChange={onImage}
                disabled={titleModal === "detail_form"}
                ref={imageElement}
              />
              {imageError && (
                <span className="invalid-feedback">Please fill your Image</span>
              )}
              {imagePreview && (
                <div className="mt-2 flex">
                  <div>
                    {imagePreview && (
                      <img
                        src={imagePreview}
                        alt="image"
                        width="120px"
                        height="120px"
                      />
                    )}
                  </div>
                  {imagePreview && titleModal !== "detail_form" && (
                    <div>
                      <a
                        className="style-image-preview-wrap-pointer"
                        role="button"
                        onClick={removeImage}
                      >
                        <span className="material-symbols-outlined text-xl">
                          close
                        </span>
                      </a>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </Modal.Body>
        {titleModal !== "detail_form" && (
          <Modal.Footer>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-800 w-full "
              onClick={handleSubmit}
            >
              Submit
            </button>
          </Modal.Footer>
        )}
      </Modal>
    );
  }
};

export default ModalForm;
