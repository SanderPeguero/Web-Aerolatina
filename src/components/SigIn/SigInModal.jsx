import * as React from 'react'
import { Box, Modal } from '@mui/material'
// import Modal from '@mui/material/Modal'
import { Close } from '@mui/icons-material'
import Fab from '@mui/material/Fab'

import SignUp from './SigIn'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,

}
const BasicModal = ({ open, setOpen }) => {

  const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}

      >
        <Box sx={style} style={{ border: 'none', background: '#e1f5fe' }}>
          <Fab size='small' color='primary' aria-label='cerrar' onClick={handleClose}
            style={{
              background: 'black',
              alignSelf: 'inherit',
              borderRight: '3rem',
              float: 'right'
            }}
          >
            <Close />
          </Fab>
          <SignUp key={Math.random() * (1 - 1000)}/>
        </Box>
      </Modal>
    </div>

  )
}

export default BasicModal