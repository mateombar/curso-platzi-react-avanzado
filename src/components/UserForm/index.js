import React, { Fragment } from 'react';
import { useInputValue } from '../../hooks/useInputValue';
import { Fox } from '../Fox/index';
import { Form, Input, Button, Title, Text } from './styles';
import { ErrorMessage } from '../ErrorMessage';
import { Loader } from '../Loader';
export const UserForm = ({ onSubmit, title, text, loading, error }) => {
    const email = useInputValue('')
    const password = useInputValue('')
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ email: email.value, password: password.value })
    }
    return (
        <Fragment>
            <Fox />
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Form onSubmit={handleSubmit} disabled={loading}>
                {loading && <Loader />}
                <Input placeholder="Email" {...email} disabled={loading} />
                <Input type="password" placeholder="password" {...password} disabled={loading} />
                <Button disabled={loading}>{title}</Button>
                {error && <ErrorMessage message={error} title={false}/>}
            </Form>
        </Fragment>
    )
};