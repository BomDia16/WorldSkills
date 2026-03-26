import React from 'react'
import { motion } from 'framer-motion'

function TutorialCard({message, imagem}) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4 }}
        >
            <div className='flex justify-center w-100 flex-col h-100 items-center'>
                <img className='h-37.5' src={imagem} alt="" />
                <p className='w-60'>{message}</p>
            </div>
        </motion.div>
    )
}

export default TutorialCard