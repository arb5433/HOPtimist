import { useState } from 'react';
import { Modal } from '../../context/Modal';
import SingupForm from './SignupForm.js';

function SignupFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className='signup-btn' onClick={() => setShowModal(true)}>Create an Account</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <SingupForm />
        </Modal>
      )}
    </>
  );
}

export default SignupFormModal;