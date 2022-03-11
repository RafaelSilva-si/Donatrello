//Componente de Modal para inserir Tasks

import React, { useState } from 'react'

import {
  Modal,
  Button,
  InputGroup,
  FormControl,
  Form
} from 'react-bootstrap'
import * as Utils from '../styles/utils'


export default props => {

  const [desc, setDesc] = useState('')
  const [title, settitle] = useState('')
  const [tag, setColor] = useState('')


  const onSubmit = (title, desc, tag) => {
    props.onSubmit(title, desc, tag)
    setDesc('')
    settitle('')
    setColor('')
    props.close()
  }

  return (
    <Modal show={props.show} centered >
      <Modal.Header closeButton onClick={() => props.close()}>
        <Modal.Title>Adicionar Tarefa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup className="mb-3">
          <FormControl
            placeholder='titulo'
            value={title}
            onChange={e => settitle(e.target.value)}
          />
        </InputGroup>
        <InputGroup className="mb-3">
          <FormControl
            as="textarea"
            placeholder="Descrição"
            value={desc}
            onChange={e => setDesc(e.target.value)}
            rows="6"
          />
        </InputGroup>
        <Utils.TagsFields>
          <div className="d-flex justify-content-between">
            <h5>Tags</h5>
          </div>

          <Form.Control as="select" value={tag} onChange={e => setColor(e.target.value)}>
            <option></option>
            <option value="#f44336">Urgencia</option>
            <option value="#4caf50">Em prazo</option>
            <option value="#ffc107">Revisar</option>
          </Form.Control>

        </Utils.TagsFields>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => props.close()} >
          Cancelar
          </Button>
        <Button
          variant="success"
          onClick={() => onSubmit(title, desc, tag)}
        >
          Salvar
          </Button>
      </Modal.Footer>
    </Modal>
  )
}