import React from "react";
import Card from "./Card";
import axios from "axios";
import './Pricing.css'


const Home = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://www.localhost:4000/api/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "name",
      description: "Tutorial of RazorPay",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <div>
      
      <div>
        <div class="row">
          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">ADAS</h5>
                <h5>
                  <div class="price">
                    <sub class="currency">Rs.</sub>
                    35,000{" "}
                    <del>
                      <i class="fas fa-rupee-sign" aria-hidden="true"></i>
                      ₹50,000
                    </del>
                    <sup class="dis">30% off</sup>
                  </div>
                </h5>
                <p class="card-text">
                  Introduction to Vehicle Architecture And Self-Driving Car ,
                  Components in Autonomous Driving , ADAS/AV Software
                  Development Cycle Setup of the systems and coding Environment
                  ,Introduction to CARLA Simulator , Camera Sensor ,Lidar Sensor
                  , RADAR Sensor ,Sensor Setup with ROS on Jetson Nano Vehicle
                  Dynamics , Dynamic Bicycle Model, Dynamics of a Rigid Body
                  ,Vehicle Control Odometry, SLAM, and Localization
                  ,Localization ,NVIDIA Jetson Road and Lane Detection ,Object
                  Detection ,3D Object Detection ,Object Tracking E2E Perception
                  , Decision Making and Planning , Autonomous Navigation with
                  CARLA Simulato ,Preparing Vehicle for Data Acquisition and
                  Testing ,Data recording tools and Annotation Pipelines
                  ,Adaptive Cruise Control
                </p>
                <div className="btndiv">
                <Card amount={35000} checkoutHandler={checkoutHandler} />
                  
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">SOFTWARE-DEFINED VEHICLE DEVELOPMENT</h5>
                <h5>
                  <div class="price">
                    <sub class="currency">Rs.</sub>
                    35,000{" "}
                    <del>
                      <i class="fas fa-rupee-sign" aria-hidden="true"></i>
                      ₹50,000
                    </del>
                    <sup class="dis">30% off</sup>
                  </div>
                </h5>
                <p class="card-text">
                  Introduction to Vehicle Architecture And Self-Driving Car ,
                  Components in Autonomous Driving , ADAS/AV Software
                  Development Cycle Setup of the systems and coding Environment
                  ,Introduction to CARLA Simulator , Camera Sensor ,Lidar Sensor
                  , RADAR Sensor ,Sensor Setup with ROS on Jetson Nano Vehicle
                  Dynamics , Dynamic Bicycle Model, Dynamics of a Rigid Body
                  ,Vehicle Control Odometry, SLAM, and Localization
                  ,Localization ,NVIDIA Jetson Road and Lane Detection ,Object
                  Detection ,3D Object Detection ,Object Tracking E2E Perception
                  , Decision Making and Planning , Autonomous Navigation with
                  CARLA Simulato ,Preparing Vehicle for Data Acquisition and
                  Testing ,Data recording tools and Annotation Pipelines
                  ,Adaptive Cruise Control
                </p>
                <div className="btndiv">
                  
                <Card amount={35000} checkoutHandler={checkoutHandler} />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
