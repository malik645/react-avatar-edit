"use client";
import React, { useEffect, useState } from "react";
import { Button, Dialog } from "@mui/material";
import Image from "next/image";
import Avatar from "react-avatar-edit";

export const ProfilePicture = () => {
  const [profilePicture, setProfilePicture] = useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [profileImgSrc, setProfileImgSrc] = useState("");
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onClose = () => {
    setProfileImgSrc("");
  };

  const onCrop = (profileImgSrc: any) => {
    setProfileImgSrc(profileImgSrc);
  };

  const onBeforeFileLoad = (elem: any) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };
  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <div className="relative">
        <Dialog open={openModal} onClose={handleClose}>
          <Avatar
            width={width < 767 ? width - 100 : 600}
            height={250}
            onCrop={onCrop}
            onClose={onClose}
            onBeforeFileLoad={onBeforeFileLoad}
            labelStyle={{
              color: "#fff",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          />
          <Button
            sx={{
              color: "#FFFFFF",
              background:
                "linear-gradient(89.11deg, #235BC8 -8.32%, #001FC4 107.95%)",
              borderRadius: "10px",
              padding: "10px",
              fontFamily: "raleway",
              fontWeight: "500",
              fontSize: "16px",
              lineHeight: "23px",
              textAlign: "center",
              maxWidth: "100px",
              margin: "20px auto 0",
            }}
            onClick={() => {
              setProfilePicture(true);
              setOpenModal(false);
            }}
          >
            Save
          </Button>
        </Dialog>
        {profilePicture && profileImgSrc ? (
          <img
            className="rounded-full mx-auto"
            src={profileImgSrc}
            alt=""
            width={150}
            height={150}
          />
        ) : (
          <div
            className="rounded-full flex justify-center items-center w-[150px] h-[150px] mx-auto"
            style={{ border: "1px solid #4E515A" }}
            onClick={handleClickOpen}
          >
            <span>Uploads</span>
          </div>
        )}
        <form>
          <div>
            <label>Full Name</label>
            <input
              className="p-4 w-full rounded-[4px] border border-black"
              type="text"
              name="full_name"
              value="Mehboob Alim"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              className="p-4 w-full rounded-[4px] border border-black"
              type="email"
              name="email"
              value="mehboobm4lik@gmail.com"
            />
          </div>
          <div>
            <label>Password</label>
            <input
              className="p-4 w-full rounded-[4px] border border-black"
              type="password"
              name="password"
              value="123456"
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              className="p-4 w-full rounded-[4px] border border-black"
              type="password"
              name="confirm_password"
              value="123456"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};
