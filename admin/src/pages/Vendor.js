import React, { useEffect } from 'react';
import '../App.css';
import GlobalStyles from '../Components/GlobalStyles';
import 'bootstrap/dist/css/bootstrap.min.css';
import VendorArea from '../Components/Vendor/VendorArea';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import CommonBanner from '../Components/CommonBanner';


function Vendor() {
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://api.greenbnb.info/accounts/admin`, {
        headers: {
          Authorization: `Bearer ${Cookies.get('access_token')}`,
          "x-api-key": "9c30dbde-c67a-4638-b24e-94f01d78bd1d"
        },
      })
      .then((response) => {

      })
      .catch(function (error) {
        navigate('/login');
        console.log(error);
      });
  }, []);
  return (
    <GlobalStyles>
      <div className="App" style={{ padding: 0 }}>
        {/* <Header /> */}
        <CommonBanner namePage={`Admin`} />
        <VendorArea />
      </div>
    </GlobalStyles>
  )
};

export default Vendor;