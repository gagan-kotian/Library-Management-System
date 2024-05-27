// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract June {
    struct Student {
        string name;
        string university;
        string program;
        bool approved;
    }

    mapping(uint256 => Student) public students;
    uint256 public studentCount;

    function requestRecommendation(string memory _name, string memory _university, string memory _program) public returns (uint256) {
        uint256 id = studentCount++;
        students[id] = Student({
            name: _name,
            university: _university,
            program: _program,
            approved: false
        });
        return id;
    }

    function approveRecommendation(uint256 _id) public {
        require(!students[_id].approved, "Recommendation already approved.");
        students[_id].approved = true;
    }

    function getStudentDetails(uint256 _id) public view returns (string memory, string memory, string memory, bool) {
        return (
            students[_id].name,
            students[_id].university,
            students[_id].program,
            students[_id].approved
        );
    }
}
