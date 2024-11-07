
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import './index.scss'
const Profile = (props)=>{
    const [openModal, setOpenModal] = useState(true);
    const { isOpen, titleModal  } = props;
    
    return (
        <>
            <Modal dismissible onClose={() =>  props.modalClose(false)} show={isOpen}>
                <Modal.Header>About</Modal.Header>
                <Modal.Body>
                <div className="space-y-6">
                    <div className="flex w-full justify-center items center px-1 py-1">
                        <img
                            className="h-24 h-24 rounded-full"
                            src='https://reqres.in/img/faces/11-image.jpg'
                            alt='anjas'
                        />
                    </div>
                    <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Name : Bonnie Green
                    </div>
                    <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Email : bonnie@flowbite.com
                    </div>
                </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Profile