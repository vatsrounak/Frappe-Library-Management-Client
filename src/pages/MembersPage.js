import React from "react";
import MemberList from "../components/MemberList";

const MembersPage = () => {
  return (
    <div className="bg-gradient-to-r from-yellow-200 to-yellow-600 min-h-screen flex justify-center items-center p-6">
      {/* Removed the commented-out div tags
      <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      */}
      <div className="bg-gradient-to-r from-amber-600 to-amber-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold mb-4">Member List</h2>
        <div className="bg-white shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <MemberList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
