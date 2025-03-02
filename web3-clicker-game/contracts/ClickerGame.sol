// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract ClickerGame {
    mapping(address => uint256) private scores;

    event ScoreUpdated(address indexed player, uint256 newScore);

    // Function to update player's score
    function updateScore(uint256 _score) external {
        require(_score > scores[msg.sender], "New score must be higher");
        scores[msg.sender] = _score;
        emit ScoreUpdated(msg.sender, _score);
    }

    // Function to retrieve player's score
    function getScore(address _player) external view returns (uint256) {
        return scores[_player];
    }
}
