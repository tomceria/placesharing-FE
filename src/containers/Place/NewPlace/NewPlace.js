import React from 'react'
import styles from './NewPlace.module.css'

import Input from '../../../components/shared/Form/Input/Input'
import { VALIDATOR_REQUIRE } from '../../../utils/validators'

const newPlace = () => {
  return (
    <form className={styles.placeForm}>
      <Input
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title.'
      />
    </form>
  )
}

export default newPlace
