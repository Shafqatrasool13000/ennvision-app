import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { Checkbox, Form } from "antd";
import {RegisterStyledContainer } from "./style";
import FormControl from "../../Components/FormControl";
import CustomButton from "../../Components/CustomButton/Index";
import {PrimaryColor, secondaryDark3, tertiaryGrey3 } from "../../Components/GlobalStyle";
import {useNavigate} from "react-router-dom";
import GenericService from "../../Services/GenericService";
import { API_URL } from "../../Services/config";
import { toast } from "react-toastify";
import { Col, Container, Row } from "react-bootstrap";
import ic_logo from '../../assets/icons/ic_logo.svg';
import PhoneInput from "../../Components/CustomPhoneInput/Index";

    const initialValues = {
    email: "",
    password: "",
    };
    const validationSchema = Yup.object({
    email: Yup.string()
    .required("Email is required!")
    .email("Valid email address is required"),
    password: Yup.string()
    .required("Invalid credentials. Please try again!")
    .min(6, "Minimum six character is required"),
    });

    const Index = ({ logIn }) => {
    const navigation = useNavigate();
    const genericService = new GenericService();

    const nextScreenHandler = () => {
    navigation("/signup");
    };

    const onSubmit = (value) => {
    console.log(value, "value");
    genericService
    .post(`${API_URL}auth/signin`, value)
    .then((msg) => {
    if (msg.resultCode == 200) {
    logIn();
    localStorage.setItem("userData", JSON.stringify(msg.data));
    navigation("/my-home");
    } else {
    toast(msg.message, "top-right");
    }
    })
    .catch((error) => {
    console.log(error, "error");
    if (error.response.status == 401) {
    toast("login credentials is invalid", "top-right");
    }
    });
    };

    const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
    };

    return (
    <Container fluid className="p-0 overflow-auto">
    <RegisterStyledContainer>
    <Row>
    <Col md={5}>
      <div className="left-side-img"/>
    </Col>
    <Col md={7}>
  <div className="right-side">
    <div className="text-center img-logo">
      <img src={ic_logo} alt="logo" />
    </div>
    <h4 className="main-heading">
      <span className="d-block">
        Want To Be A Ennvisions
      </span>
      <span>
        Merchant? (CANADA)
      </span>
    </h4>
    <p className="mini-heading">Leave your restaurant details here and we will be in touch shortly.</p>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => {
            return (
              <Form
                name="basic"
                onFinish={formik.handleSubmit}
                autoComplete="off"
                validateMessages={validationSchema}
              >
                <Row>
                  <Col md={12}>
                    <FormControl
                      control="input"
                      type="text"
                      name="location"
                      placeholder="Location Name"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col md={6} className="login-input-fields-field">
                    <FormControl
                      control="input"
                      type="text"
                      name="first-name"
                      placeholder="First Name"
                      className={
                        formik.errors.password && formik.touched.password
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col md={6} className="login-input-fields-field">
                    <FormControl
                      control="input"
                      type="text"
                      name="last- name"
                      placeholder="Last Name"
                      className={
                        formik.errors.password && formik.touched.password
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col md={6} >
                    <PhoneInput />
                  </Col>
                  <Col md={6} >
                    <PhoneInput />
                  </Col>

                  <Col md={12} className='mt-2'>
                    <FormControl
                      control="input"
                      type="text"
                      name="email"
                      placeholder="Official Email"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col md={6} className='mt-2'>
                    <FormControl
                      control="select"
                      type="text"
                      name="state"
                      label='State'
                      placeholder="Enter State"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col md={6} className='mt-2'>
                    <FormControl
                      control="select"
                      name="city"
                      label='City'
                      placeholder="Enter City"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                      options={[{ key: 'city 1', value: 'city1' }, { key: 'city 2', value: 'city2' }]}
                    />
                  </Col>
                  <Col md={12} className='mt-3'>
                    <FormControl
                      control="input"
                      type="text"
                      name="address"
                      placeholder="Address"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col md={12}>
                    <FormControl
                      control="input"
                      type="text"
                      name="social-page"
                      placeholder="Facebook Page / Company Website"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Row>
                    <h5 className="ownership-heading">Are you the owner or manager of this place? *</h5>
                    <Col md={6}>
                      <Checkbox onChange={onChange}>I'm not the owner/manager</Checkbox>
                    </Col>
                    <Col md={6}>
                      <Checkbox onChange={onChange}>I'm the owner/manager</Checkbox>
                    </Col>
                  </Row>
                  <Col md={12} className='mt-3'>
                    <FormControl
                      control="multiSelect"
                      type="text"
                      name="business-catagory"
                      placeholder="Select Contact"
                      defaultValue={['a10', 'c12']}
                      label="Business Category"
                      className={
                        formik.errors.contacts && formik.touched.contacts
                          ? "is-invalid"
                          : "customInput"
                      }
                    // options={contactsData?.data.result}
                    />
                  </Col>
                  <Col md={12} className='mt-2'>
                    <FormControl
                      control="select"
                      name="sole"
                      label='Business Type'
                      placeholder="Sole Proprietorship"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                      options={[{ key: 'city 1', value: 'city1' }, { key: 'city 2', value: 'city2' }]}
                    />
                  </Col>
                  <Col md={12} className='mt-2'>
                    <FormControl
                      control="input"
                      type="text"
                      name="company-name"
                      placeholder="Company Name (SSM)"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col md={12} className='mt-2'>
                    <FormControl
                      control="input"
                      type="number"
                      name="company-register-number"
                      placeholder="Company Registration Number (SSM)"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                    />
                  </Col>
                  <Col md={6} className='mt-2'>
                    <FormControl
                      control="select"
                      name="sole"
                      label='Business Type'
                      placeholder="Sole Proprietorship"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                      options={[{ key: 'city 1', value: 'city1' }, { key: 'city 2', value: 'city2' }]}
                    />
                  </Col>
                  <Col md={6} className='mt-2'>
                    <FormControl
                      control="select"
                      name="house-delivery"
                      label='House delivery services?'
                      placeholder="yes"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                      options={[{ key: 'city 1', value: 'city1' }, { key: 'city 2', value: 'city2' }]}
                    />
                  </Col>
                  <Col md={12} className='mt-2'>
                    <FormControl
                      control="select"
                      name="sole"
                      label='Opening status'
                      placeholder="This place is already open"
                      className={
                        formik.errors.email && formik.touched.email
                          ? "is-invalid"
                          : "customInput"
                      }
                      options={[{ key: 'city 1', value: 'city1' }, { key: 'city 2', value: 'city2' }]}
                    />
                  </Col>

                  <div className="mt-2">
                    <CustomButton
                      bgcolor={tertiaryGrey3}
                      color={secondaryDark3}
                      padding="11px 8px"
                      width="100%"
                      type="submit"
                      title="+Add more info"
                    />
                    </div>

                    <p className="terms text-center">I agree that you can collect, use and disclose the information provided by me in accordance with your <span style={{ color: `${PrimaryColor}` }}>Privacy Policy</span> which I have read and understand</p>
                </Row>
              </Form>
            );
          }}
        </Formik>
        </div>
</Col>
</Row>
</RegisterStyledContainer>
</Container>
);
};

export default Index;
