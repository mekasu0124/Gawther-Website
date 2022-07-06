import React from 'react';
import {
    SignupForm,
    TitleCont,
    Form,
    FormHeader,
    FormBody,
    FormBoxOne,
    BoxHeader,
    BoxBody,
    FormItems,
    FormFooter,
    Buttons,
    Title,
    Title2,
    Title3,
    Label,
    Label2,
    Button,
    Links,
    Input,
    Select,
    Option,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Span
} from '../styles/signup.style';


function Signup() {
   return (
    <SignupForm className="container-fluid">
        <TitleCont className="container">
            <Title>We're Happy You're Joining Us!</Title>
        </TitleCont>
        <Form className="container-fluid">
            <FormHeader className="container">
                <Label2>
                    We are excited to have you join our community! Please do fill out the
                    form below. All items marked with an asterisks <Span><code>*</code></Span> are required
                    entries that cannot be left blank.
                </Label2>
            </FormHeader>
            <FormBody className="container">
                <Title2>Account Information</Title2>
                <FormBoxOne className="container">
                    <BoxHeader className="container">
                        <Title3>General</Title3>
                    </BoxHeader>
                    <BoxBody className="container-fluid">
                        <FormItems className="container-fluid">
                            <One className="container">
                                <Label><Span>*</Span>First Name:</Label>
                                <Input type="text" id="fname" placeholder="John/Jane" />
                            </One>
                            <Two className="container">
                                <Label><Span>*</Span>Last Name:</Label>
                                <Input type="text" id="lname" placeholder="Doe/Dough" />
                            </Two>
                            <Three className="container">
                                <Label><Span>*</Span>Email Address:</Label>
                                <Input type="text" id="address" placeholder="example@email.com" />
                            </Three>
                            <Four className="container">
                                <Label><Span>*</Span>Phone Number:</Label>
                                <Input id="phone" type="text" placeholder="(999)-999-9999" />
                            </Four>
                            <Five className="container">
                                <Label><Span>*</Span>Mailing Address</Label>
                                <Input type="text" id="street" placeholder="123 Example Lane" />
                            </Five>
                            <Six className="container">
                                <Label><Span>*</Span>Select Country</Label>
                                <Select id="country" name="country">
                                    <Option>Select Country</Option>
                                    <Option value="AF">Afghanistan</Option>
                                    <Option value="AX">Aland Islands</Option>
                                    <Option value="AL">Albania</Option>
                                    <Option value="DZ">Algeria</Option>
                                    <Option value="AS">American Samoa</Option>
                                    <Option value="AD">Andorra</Option>
                                    <Option value="AO">Angola</Option>
                                    <Option value="AI">Anguilla</Option>
                                    <Option value="AQ">Antarctica</Option>
                                    <Option value="AG">Antigua and Barbuda</Option>
                                    <Option value="AR">Argentina</Option>
                                    <Option value="AM">Armenia</Option>
                                    <Option value="AW">Aruba</Option>
                                    <Option value="AU">Australia</Option>
                                    <Option value="AT">Austria</Option>
                                    <Option value="AZ">Azerbaijan</Option>
                                    <Option value="BS">Bahamas</Option>
                                    <Option value="BH">Bahrain</Option>
                                    <Option value="BD">Bangladesh</Option>
                                    <Option value="BB">Barbados</Option>
                                    <Option value="BY">Belarus</Option>
                                    <Option value="BE">Belgium</Option>
                                    <Option value="BZ">Belize</Option>
                                    <Option value="BJ">Benin</Option>
                                    <Option value="BM">Bermuda</Option>
                                    <Option value="BT">Bhutan</Option>
                                    <Option value="BO">Bolivia</Option>
                                    <Option value="BQ">Bonaire, Sint Eustatius and Saba</Option>
                                    <Option value="BA">Bosnia and Herzegovina</Option>
                                    <Option value="BW">Botswana</Option>
                                    <Option value="BV">Bouvet Island</Option>
                                    <Option value="BR">Brazil</Option>
                                    <Option value="IO">British Indian Ocean Territory</Option>
                                    <Option value="BN">Brunei Darussalam</Option>
                                    <Option value="BG">Bulgaria</Option>
                                    <Option value="BF">Burkina Faso</Option>
                                    <Option value="BI">Burundi</Option>
                                    <Option value="KH">Cambodia</Option>
                                    <Option value="CM">Cameroon</Option>
                                    <Option value="CA">Canada</Option>
                                    <Option value="CV">Cape Verde</Option>
                                    <Option value="KY">Cayman Islands</Option>
                                    <Option value="CF">Central African Republic</Option>
                                    <Option value="TD">Chad</Option>
                                    <Option value="CL">Chile</Option>
                                    <Option value="CN">China</Option>
                                    <Option value="CX">Christmas Island</Option>
                                    <Option value="CC">Cocos (Keeling) Islands</Option>
                                    <Option value="CO">Colombia</Option>
                                    <Option value="KM">Comoros</Option>
                                    <Option value="CG">Congo</Option>
                                    <Option value="CD">Congo, Democratic Republic of the Congo</Option>
                                    <Option value="CK">Cook Islands</Option>
                                    <Option value="CR">Costa Rica</Option>
                                    <Option value="CI">Cote D'Ivoire</Option>
                                    <Option value="HR">Croatia</Option>
                                    <Option value="CU">Cuba</Option>
                                    <Option value="CW">Curacao</Option>
                                    <Option value="CY">Cyprus</Option>
                                    <Option value="CZ">Czech Republic</Option>
                                    <Option value="DK">Denmark</Option>
                                    <Option value="DJ">Djibouti</Option>
                                    <Option value="DM">Dominica</Option>
                                    <Option value="DO">Dominican Republic</Option>
                                    <Option value="EC">Ecuador</Option>
                                    <Option value="EG">Egypt</Option>
                                    <Option value="SV">El Salvador</Option>
                                    <Option value="GQ">Equatorial Guinea</Option>
                                    <Option value="ER">Eritrea</Option>
                                    <Option value="EE">Estonia</Option>
                                    <Option value="ET">Ethiopia</Option>
                                    <Option value="FK">Falkland Islands (Malvinas)</Option>
                                    <Option value="FO">Faroe Islands</Option>
                                    <Option value="FJ">Fiji</Option>
                                    <Option value="FI">Finland</Option>
                                    <Option value="FR">France</Option>
                                    <Option value="GF">French Guiana</Option>
                                    <Option value="PF">French Polynesia</Option>
                                    <Option value="TF">French Southern Territories</Option>
                                    <Option value="GA">Gabon</Option>
                                    <Option value="GM">Gambia</Option>
                                    <Option value="GE">Georgia</Option>
                                    <Option value="DE">Germany</Option>
                                    <Option value="GH">Ghana</Option>
                                    <Option value="GI">Gibraltar</Option>
                                    <Option value="GR">Greece</Option>
                                    <Option value="GL">Greenland</Option>
                                    <Option value="GD">Grenada</Option>
                                    <Option value="GP">Guadeloupe</Option>
                                    <Option value="GU">Guam</Option>
                                    <Option value="GT">Guatemala</Option>
                                    <Option value="GG">Guernsey</Option>
                                    <Option value="GN">Guinea</Option>
                                    <Option value="GW">Guinea-Bissau</Option>
                                    <Option value="GY">Guyana</Option>
                                    <Option value="HT">Haiti</Option>
                                    <Option value="HM">Heard Island and Mcdonald Islands</Option>
                                    <Option value="VA">Holy See (Vatican City State)</Option>
                                    <Option value="HN">Honduras</Option>
                                    <Option value="HK">Hong Kong</Option>
                                    <Option value="HU">Hungary</Option>
                                    <Option value="IS">Iceland</Option>
                                    <Option value="IN">India</Option>
                                    <Option value="ID">Indonesia</Option>
                                    <Option value="IR">Iran, Islamic Republic of</Option>
                                    <Option value="IQ">Iraq</Option>
                                    <Option value="IE">Ireland</Option>
                                    <Option value="IM">Isle of Man</Option>
                                    <Option value="IL">Israel</Option>
                                    <Option value="IT">Italy</Option>
                                    <Option value="JM">Jamaica</Option>
                                    <Option value="JP">Japan</Option>
                                    <Option value="JE">Jersey</Option>
                                    <Option value="JO">Jordan</Option>
                                    <Option value="KZ">Kazakhstan</Option>
                                    <Option value="KE">Kenya</Option>
                                    <Option value="KI">Kiribati</Option>
                                    <Option value="KP">Korea, Democratic People's Republic of</Option>
                                    <Option value="KR">Korea, Republic of</Option>
                                    <Option value="XK">Kosovo</Option>
                                    <Option value="KW">Kuwait</Option>
                                    <Option value="KG">Kyrgyzstan</Option>
                                    <Option value="LA">Lao People's Democratic Republic</Option>
                                    <Option value="LV">Latvia</Option>
                                    <Option value="LB">Lebanon</Option>
                                    <Option value="LS">Lesotho</Option>
                                    <Option value="LR">Liberia</Option>
                                    <Option value="LY">Libyan Arab Jamahiriya</Option>
                                    <Option value="LI">Liechtenstein</Option>
                                    <Option value="LT">Lithuania</Option>
                                    <Option value="LU">Luxembourg</Option>
                                    <Option value="MO">Macao</Option>
                                    <Option value="MK">Macedonia, the Former Yugoslav Republic of</Option>
                                    <Option value="MG">Madagascar</Option>
                                    <Option value="MW">Malawi</Option>
                                    <Option value="MY">Malaysia</Option>
                                    <Option value="MV">Maldives</Option>
                                    <Option value="ML">Mali</Option>
                                    <Option value="MT">Malta</Option>
                                    <Option value="MH">Marshall Islands</Option>
                                    <Option value="MQ">Martinique</Option>
                                    <Option value="MR">Mauritania</Option>
                                    <Option value="MU">Mauritius</Option>
                                    <Option value="YT">Mayotte</Option>
                                    <Option value="MX">Mexico</Option>
                                    <Option value="FM">Micronesia, Federated States of</Option>
                                    <Option value="MD">Moldova, Republic of</Option>
                                    <Option value="MC">Monaco</Option>
                                    <Option value="MN">Mongolia</Option>
                                    <Option value="ME">Montenegro</Option>
                                    <Option value="MS">Montserrat</Option>
                                    <Option value="MA">Morocco</Option>
                                    <Option value="MZ">Mozambique</Option>
                                    <Option value="MM">Myanmar</Option>
                                    <Option value="NA">Namibia</Option>
                                    <Option value="NR">Nauru</Option>
                                    <Option value="NP">Nepal</Option>
                                    <Option value="NL">Netherlands</Option>
                                    <Option value="AN">Netherlands Antilles</Option>
                                    <Option value="NC">New Caledonia</Option>
                                    <Option value="NZ">New Zealand</Option>
                                    <Option value="NI">Nicaragua</Option>
                                    <Option value="NE">Niger</Option>
                                    <Option value="NG">Nigeria</Option>
                                    <Option value="NU">Niue</Option>
                                    <Option value="NF">Norfolk Island</Option>
                                    <Option value="MP">Northern Mariana Islands</Option>
                                    <Option value="NO">Norway</Option>
                                    <Option value="OM">Oman</Option>
                                    <Option value="PK">Pakistan</Option>
                                    <Option value="PW">Palau</Option>
                                    <Option value="PS">Palestinian Territory, Occupied</Option>
                                    <Option value="PA">Panama</Option>
                                    <Option value="PG">Papua New Guinea</Option>
                                    <Option value="PY">Paraguay</Option>
                                    <Option value="PE">Peru</Option>
                                    <Option value="PH">Philippines</Option>
                                    <Option value="PN">Pitcairn</Option>
                                    <Option value="PL">Poland</Option>
                                    <Option value="PT">Portugal</Option>
                                    <Option value="PR">Puerto Rico</Option>
                                    <Option value="QA">Qatar</Option>
                                    <Option value="RE">Reunion</Option>
                                    <Option value="RO">Romania</Option>
                                    <Option value="RU">Russian Federation</Option>
                                    <Option value="RW">Rwanda</Option>
                                    <Option value="BL">Saint Barthelemy</Option>
                                    <Option value="SH">Saint Helena</Option>
                                    <Option value="KN">Saint Kitts and Nevis</Option>
                                    <Option value="LC">Saint Lucia</Option>
                                    <Option value="MF">Saint Martin</Option>
                                    <Option value="PM">Saint Pierre and Miquelon</Option>
                                    <Option value="VC">Saint Vincent and the Grenadines</Option>
                                    <Option value="WS">Samoa</Option>
                                    <Option value="SM">San Marino</Option>
                                    <Option value="ST">Sao Tome and Principe</Option>
                                    <Option value="SA">Saudi Arabia</Option>
                                    <Option value="SN">Senegal</Option>
                                    <Option value="RS">Serbia</Option>
                                    <Option value="CS">Serbia and Montenegro</Option>
                                    <Option value="SC">Seychelles</Option>
                                    <Option value="SL">Sierra Leone</Option>
                                    <Option value="SG">Singapore</Option>
                                    <Option value="SX">Sint Maarten</Option>
                                    <Option value="SK">Slovakia</Option>
                                    <Option value="SI">Slovenia</Option>
                                    <Option value="SB">Solomon Islands</Option>
                                    <Option value="SO">Somalia</Option>
                                    <Option value="ZA">South Africa</Option>
                                    <Option value="GS">South Georgia and the South Sandwich Islands</Option>
                                    <Option value="SS">South Sudan</Option>
                                    <Option value="ES">Spain</Option>
                                    <Option value="LK">Sri Lanka</Option>
                                    <Option value="SD">Sudan</Option>
                                    <Option value="SR">Suriname</Option>
                                    <Option value="SJ">Svalbard and Jan Mayen</Option>
                                    <Option value="SZ">Swaziland</Option>
                                    <Option value="SE">Sweden</Option>
                                    <Option value="CH">Switzerland</Option>
                                    <Option value="SY">Syrian Arab Republic</Option>
                                    <Option value="TW">Taiwan, Province of China</Option>
                                    <Option value="TJ">Tajikistan</Option>
                                    <Option value="TZ">Tanzania, United Republic of</Option>
                                    <Option value="TH">Thailand</Option>
                                    <Option value="TL">Timor-Leste</Option>
                                    <Option value="TG">Togo</Option>
                                    <Option value="TK">Tokelau</Option>
                                    <Option value="TO">Tonga</Option>
                                    <Option value="TT">Trinidad and Tobago</Option>
                                    <Option value="TN">Tunisia</Option>
                                    <Option value="TR">Turkey</Option>
                                    <Option value="TM">Turkmenistan</Option>
                                    <Option value="TC">Turks and Caicos Islands</Option>
                                    <Option value="TV">Tuvalu</Option>
                                    <Option value="UG">Uganda</Option>
                                    <Option value="UA">Ukraine</Option>
                                    <Option value="AE">United Arab Emirates</Option>
                                    <Option value="GB">United Kingdom</Option>
                                    <Option value="US">United States</Option>
                                    <Option value="UM">United States Minor Outlying Islands</Option>
                                    <Option value="UY">Uruguay</Option>
                                    <Option value="UZ">Uzbekistan</Option>
                                    <Option value="VU">Vanuatu</Option>
                                    <Option value="VE">Venezuela</Option>
                                    <Option value="VN">Viet Nam</Option>
                                    <Option value="VG">Virgin Islands, British</Option>
                                    <Option value="VI">Virgin Islands, U.s.</Option>
                                    <Option value="WF">Wallis and Futuna</Option>
                                    <Option value="EH">Western Sahara</Option>
                                    <Option value="YE">Yemen</Option>
                                    <Option value="ZM">Zambia</Option>
                                    <Option value="ZW">Zimbabwe</Option>
                                </Select>
                            </Six>
                            <Seven className="container">
                                {/* GENERATE BASED OFF COUNTRY SELECTED */}
                                <Label><Span>*</Span>Select State</Label>
                                <Select id="state" name="state">
                                    <Option>Select State</Option>
                                </Select>
                            </Seven>
                            <Eight className="container">
                                <Label><Span>*</Span>Zip Code</Label>
                                <Input type="number" id="zip" placeholder="12345" />
                            </Eight>
                            <Nine className="container"></Nine>
                            <Ten className="container"></Ten>
                        </FormItems>
                    </BoxBody>
                    <BoxHeader className="container">
                        <Title3>Security</Title3>
                    </BoxHeader>
                    <BoxBody className="container-fluid">
                        <FormItems className="container-fluid">
                            <One className="container">
                                <Label><Span>*</Span>Security Question #1</Label>
                                <Select name="sec-quest-one">
                                    <Option>select one</Option>
                                    <Option value="one">What Is Your Mothers' Maiden Name?</Option>
                                    <Option value="two">What Is The Name Of The Street You Grew Up On?</Option>
                                    <Option value="three">What Is Your Childhood Best Friends' Last Name?</Option>
                                    <Option value="four">What Is Your Favorite Pets' Name?</Option>
                                    <Option value="five">What Was The Make Of Your First Car?</Option>
                                </Select>
                            </One>
                            <Two className="container">
                                <Label><Span>*</Span>Answer For Question #1</Label>
                                <Input type="text" id="q1a" />
                            </Two>
                            <Three className="container">
                                <Label><Span>*</Span>Security Question #2</Label>
                                <Select name="sec-quest-two">
                                    <Option>select one</Option>
                                    <Option value="one">What Is Your Mothers' Maiden Name?</Option>
                                    <Option value="two">What Is The Name Of The Street You Grew Up On?</Option>
                                    <Option value="three">What Is Your Childhood Best Friends' Last Name?</Option>
                                    <Option value="four">What Is Your Favorite Pets' Name?</Option>
                                    <Option value="five">What Was The Make Of Your First Car?</Option>
                                </Select>
                            </Three>
                            <Four className="container">
                                <Label><Span>*</Span>Answer For Question #2</Label>
                                <Input type="text" id="q2a" />
                            </Four>
                            <Five className="container">
                                <Label><Span>*</Span>Security Question #3</Label>
                                <Select name="sec-quest-one">
                                    <Option>select one</Option>
                                    <Option value="one">What Is Your Mothers' Maiden Name?</Option>
                                    <Option value="two">What Is The Name Of The Street You Grew Up On?</Option>
                                    <Option value="three">What Is Your Childhood Best Friends' Last Name?</Option>
                                    <Option value="four">What Is Your Favorite Pets' Name?</Option>
                                    <Option value="five">What Was The Make Of Your First Car?</Option>
                                </Select>
                            </Five>
                            <Six className="container">
                                <Label><Span>*</Span>Answer For Question #3</Label>
                                <Input type="text" id="q3a" />
                            </Six>
                        </FormItems>
                    </BoxBody>
                    <BoxHeader className="container">
                        <Title3>Password</Title3>
                    </BoxHeader>
                    <BoxBody className="container-fluid">
                        <FormItems className="container-fluid">
                            <One className="container">
                                <Label><Span>*</Span>Create Password:</Label>
                                <Input type="text" id="pw" />
                            </One>
                            <Two className="container">
                                <Label><Span>*</Span>Confirm Password:</Label>
                                <Input type="text" id="conf-pw" />
                            </Two>
                        </FormItems>
                    </BoxBody>
                </FormBoxOne>
            </FormBody>
            <FormFooter className="container">
                <Links to="/support">Questions? Please Visit The Support Page</Links>
            </FormFooter>
            <Buttons className="container">
                <Button id="cancel" onClick="">Cancel</Button>
                <Button id="submit" onClick="">Sign Up</Button>
            </Buttons>
        </Form>
    </SignupForm>
   ); 
}

export default Signup;