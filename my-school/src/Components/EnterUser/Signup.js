import React, { useRef } from 'react';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import {
    Flex,
    Text,
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Select,
    Checkbox,
    IconButton,
    Button,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton
} from '@chakra-ui/core';
import { useForm } from 'react-hook-form';
import {connect} from 'react-redux'
import {register as registration} from '../../Redux/actions/actions-users'

const Signup = ({registration}) => {
    const history = useHistory();
    const { handleSubmit, errors, register, watch } = useForm();

    // Watches password value, used to validate password_confirm field
    const password = useRef({});
    password.current = watch("password", "");

    // Submit handler
    function onSubmit(data) {
        const newFam = {
            name: data.family
        };
        registration(newFam, data, 1)
        history.push('/dashboard')
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} data-testid='form-submit'>
                {/* FAMILY NAME */}
                <FormControl isInvalid={errors.family} mb="24px" >
                    <FormLabel htmlFor="family" fontWeight="700" color="gray.800">Family name</FormLabel>
                    <Flex flexDirection="row" align="center">
                        <Input 
                            id="family"
                            name="family"
                            placeholder="Last name works best"
                            focusBorderColor="myschoolblue"
                            ref={register({
                                required: "You must specify a family name",
                                minLength: {
                                    value: 2,
                                    message: "Family name must be at least 2 characters"
                                }
                            })}
                            borderColor="gray.400"
                            data-testid='family'
                            w="85%"
                        />
                        {/* NEEDS STYLING! */}
                        <Popover>
                            <PopoverTrigger>
                                <IconButton 
                                    aria-label="family name information" 
                                    icon="info-outline"
                                    ml="5%" 
                                    fontSize="1.4rem"
                                    w="5%"
                                    minW="0"
                                    bg="none"
                                    color="gray.400"
                                    _hover={{ color: "gray.500" }} 
                                    _active={{ color: "gray.500"}} 
                                />
                            </PopoverTrigger>
                            <PopoverContent
                                zIndex="10" 
                                bg="gray.100" 
                                color="gray.700" 
                                borderColor="gray.400" 
                                fontSize="sm" 
                                borderRadius="8px"
                            >
                                <PopoverArrow />
                                <PopoverCloseButton />
                                <PopoverHeader fontWeight="bold">
                                    About Family Name
                                </PopoverHeader>
                                <PopoverBody>
                                    This will be used to identify members of your family, so we can associate their accounts with yours. As an admin, you will be able to create accounts for multiple students &amp; manage them from your account. 
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                    </Flex>
                    <FormErrorMessage>{errors.family && errors.family.message}</FormErrorMessage>
                </FormControl>

                {/* EMAIL (will be username; can possibly be updated later) */}
                <FormControl isInvalid={errors.email} mb="24px" w=
                "85%">
                    <FormLabel htmlFor="email" fontWeight="700" color="gray.800">Email</FormLabel>
                    <Input 
                        id="email"
                        name="email"
                        placeholder="You'll use this email to log in"
                        focusBorderColor="myschoolblue"
                        ref={register({
                            required: "You must enter an email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Please enter a valid email address"
                            }
                        })}
                        borderColor="gray.400"
                        data-testid='email'
                        w="100%"
                    />
                    <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
                </FormControl>
                {/* PASSWORD */}
                <FormControl isInvalid={errors.password} mb="24px" w="85%">
                    <FormLabel htmlFor="password" fontWeight="700" color="gray.800">Password</FormLabel>
                    <Input 
                        type="password" 
                        id="password"
                        name="password"
                        placeholder="Enter a strong password"
                        ref={register({
                            required: "You must enter a password",
                            minLength: {
                                value: 8,
                                message: "Your password must have at least 8 characters"
                            }
                        })}
                        borderColor="gray.400"
                        data-testid='password'
                    />
                    <FormErrorMessage>{errors.password && errors.password.message}</FormErrorMessage>
                </FormControl>
                {/* PASSWORD CONFIRMATION */}
                <FormControl isInvalid={errors.password_confirm} mb="24px" w="85%">
                    <FormLabel htmlFor="password_confirm" fontWeight="700" color="gray.800">Confirm Password</FormLabel>
                    <Input 
                        type="password" 
                        id="password_confirm"
                        name="password_confirm"
                        placeholder="Enter the same password as above"
                        ref={register({
                            validate: value => 
                                value === password.current || "The passwords do not match"
                        })}
                        borderColor="gray.400"
                        data-testid='password2'
                    />
                    <FormErrorMessage>{errors.password_confirm && errors.password_confirm.message}</FormErrorMessage>
                </FormControl>
                {/* STATE? */}
                <FormControl mb="24px" w="85%">
                    <FormLabel fontWeight="700" color="gray.800">State</FormLabel>
                    <Select borderColor="gray.400" data-testid='state'>
                        <option value="maryland">Maryland</option>
                    </Select>
                </FormControl>
                {/* CHECKBOX */}
                <FormControl isInvalid={errors.parent_confirm}>
                    <Flex>
                    <Checkbox 
                        name="parent_confirm"
                        borderColor="gray.400"
                        variantColor="green"
                        ref={register({
                            required: "You must be a parent or guardian to create an account. If you're a student, please ask your parent or guardian to create an account for you."
                        })}
                        data-testid='checked'
                    >I am the parent of a child being homeschooled.</Checkbox>
                    {/* NEEDS STYLING! */}
                    <Popover>
                        <PopoverTrigger>
                            <IconButton 
                                aria-label="not a parent information" 
                                icon="info-outline" 
                                ml="5%" 
                                fontSize="1.4rem"
                                w="5%"
                                minW="0"
                                bg="none"
                                color="gray.400"
                                _hover={{ color: "gray.500" }} 
                                _active={{ color: "gray.500"}}  
                            />
                        </PopoverTrigger>
                        <PopoverContent 
                            zIndex="10" 
                            bg="gray.100" 
                            color="gray.700" 
                            borderColor="gray.400" 
                            fontSize="sm" 
                            borderRadius="8px"
                        >
                            <PopoverArrow />
                            <PopoverCloseButton color="gray.700"/>
                            <PopoverBody>
                                This sign up form creates a parent admin account. Student accounts can only be created by a parent admin from their Account Setting menu.
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <FormErrorMessage>{errors.parent_confirm && errors.parent_confirm.message}</FormErrorMessage>
                    </Flex>
                </FormControl>
                <Button
                    type="submit"
                    color="white"
                    bg="green.600"
                    p="8px 16px"
                    borderRadius="999px"
                    fontSize="1.125rem"
                    my="16px"
                    data-testid='submit'
                    _hover={{bg: "green.700"}}
                >Submit</Button>
            </form>
            <Text fontSize=".875rem">Already have an account? <Link as={RouterLink} to="/login" color='#FB6542'>Log in.</Link></Text>
        </>
    )
}

const mapStateToProps = state => {
    return {
        user: state.usersReducer.user
    }
}

export default connect(mapStateToProps, {registration})(Signup);