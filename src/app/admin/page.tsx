'use client'
import React from "react";
import UseAuthModule from "../auth/lib";

const page = () => {
  const { useProfile } = UseAuthModule();
  const { data } = useProfile();
  console.log(data);
  
  return <div>Admin 
    <div>
        
    </div>
  </div>;
};

export default page;
