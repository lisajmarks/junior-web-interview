import cntl from "cntl";
import { useState } from "react";
import "./App.css";
import Button from "./stories/Components/Button/Button";
import CollapsibleSection from "./stories/Components/CollapsibleSection/CollapsibleSection";
import Dropdown from "./stories/Components/Dropdown/Dropdown";
import Input from "./stories/Components/Input/Input";
import ProgressTracker from "./stories/Components/ProgressTracker/ProgressTracker";

const containerCN = cntl`
  mt-3
  p-3
  rounded
`;

const grid = cntl`
  grid
  grid-cols-2 
  gap-2
`;

const line = cntl`
  w-full 
  h-1 
  bg-gray-400 
  mt-6 
  mx-auto
`;

const App = () => {
  //use React state to store our form field values
  const [step, setStep] = useState(0);
  const [eSpaceName, setESpaceName] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [unit, setUnit] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [subscription, setSubscription] = useState("");
  const [country, setCountry] = useState("");

  //store values in array of strings
  const stepLabels = ["CLIENT INFO", "LOGO", "BRANDING", "APP STORE"]
  const companyNames = ["REIS Contracting, Inc", "Apple", "Facebook"]
  const subscriptions = ["Elite", "Standard", "Basic" ]
  const countryNames = ["United States", "Mexico", "Canada"]
  
  return (
    <div>
      <div className="bg-black h-screen w-screen flex justify-center items-center overflow-auto">
        <div className="p-10 w-1/3">
          <div className={containerCN}>
            <p>ADD NEW CLIENT</p>
            <ProgressTracker 
              onStepClick={(i) => setStep(i)}
              selectedIndex={step}
              steps={stepLabels}
            />
          </div>

          <div className={containerCN}>
              <CollapsibleSection title="Overview">
                <div className={grid}>
                  <div className={containerCN}>
                    <p>Company Name</p>
                    <Dropdown
                      onChange={(option) => setCompanyName(option)}
                        options={companyNames.map(val => ({label:val, value:val}))}
                        value={companyName}
                        />
                  </div>
                  <div className={containerCN}>
                    <p>eSpace Name*</p>
                    <Input
                      onChange={(name) => setESpaceName(name)}
                      placeholder="eSpace Name"
                      value={eSpaceName}
                    />
                  </div>
                  <div className={containerCN}>
                    <p>Subscription</p>
                    <Dropdown
                        onChange={(option) => setSubscription(option)}
                        options={subscriptions.map(val => ({label:val, value:val}))}
                        value={subscription}
                      />
                  </div>
                </div>
                <div className={line}></div>
              </CollapsibleSection>
          </div>

          <div className={containerCN}>
            <CollapsibleSection title="Owner Information">
              <div className={grid}>
                <div className={containerCN}>
                  <Input
                    onChange={(name) => setName(name)}
                    label="Primary Owner*"
                    placeholder="Primary Owner"
                    value={name}
                  />
                </div>
                <div className={containerCN}>
                  <Input
                    onChange={(email) => setEmail(email)}
                    label="Primary Owner Email*"
                    placeholder="Primary Owner Email"
                    value={email}
                  />
                </div>
                <div className={containerCN}>
                  <Input
                    onChange={(num) => setPhoneNum(num)}
                    label="Primary Owner Phone*"
                    placeholder="Primary Owner Phone"
                    value={phone}
                  />
                </div>
              </div>
              <div className={line}></div>
            </CollapsibleSection>
          </div>

          <div className={containerCN}>
            <CollapsibleSection title="Location information">
              <div className={grid}>
                <div className={containerCN}>
                  <Input
                    onChange={(address) => setAddress(address)}
                    label="Street Address*"
                    placeholder="Street Address"
                    value={address}
                  />
                </div>
                <div className={containerCN}>
                  <Input
                    onChange={(city) => setCity(city)}
                    label="City*"
                    placeholder="City"
                    value={city}
                  />
                </div>
                <div className={containerCN}>
                  <Input
                    onChange={(unit) => setUnit(unit)}
                    label="State/Unit"
                    placeholder="State"
                    value={unit}
                  />
                </div>
                <div className={containerCN}>
                <p>Country</p>
                <Dropdown
                    onChange={(option) => setCountry(option)}
                    options={countryNames.map(val => ({label:val, value:val}))}
                    value={country}
                  />
              </div>
                <div className={containerCN}>
                  <Input
                    onChange={(code) => setPostalCode(code)}
                    label="Postal Code*"
                    placeholder="Postal"
                    value={postalCode}
                  />
                </div>
              </div>
            </CollapsibleSection>
          </div>
          <div className={containerCN}>
          <Button
              //stringify outputs to JSON
              onClick={() => console.log(JSON.stringify(
                { eSpaceName: eSpaceName,
                  companyName: companyName.value,
                  subscription: subscription.value,
                  owner: {
                    name: name,
                    phone: phone,
                    email: email,
                  },
                  location: {
                    street: address,
                    suite: unit,
                    city: city,
                    country: country.value,
                    postalCode: postalCode,
                  },
                },
                null,
                2
              ))}              
              title="SAVE"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
