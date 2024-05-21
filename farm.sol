pragma solidity ^0.8.0;

contract FarmToTable {
    address public farmer;
    address public customer;
    uint public price;
    uint public deliveryDate;
    bool public delivered;
    bool public paid;

    constructor(address _customer, uint _price, uint _deliveryDate) {
        farmer = msg.sender;
        customer = _customer;
        price = _price;
        deliveryDate = _deliveryDate;
        delivered = false;
        paid = false;
    }

    modifier onlyFarmer() {
        require(msg.sender == farmer, "Only the farmer can call this function");
        _;
    }

    modifier onlyCustomer() {
        require(msg.sender == customer, "Only the customer can call this function");
        _;
    }

    function deliver() public onlyFarmer {
        require(block.timestamp >= deliveryDate, "Delivery date has not been reached yet");
        require(!delivered, "Already delivered");
        delivered = true;
    }

    function confirmDelivery() public onlyCustomer {
        require(delivered, "Goods not yet delivered");
        require(!paid, "Already paid");
        paid = true;
    }

    function withdraw() public onlyFarmer {
        require(paid, "Payment not yet received");
        payable(farmer).transfer(price);
    }

    receive() external payable {
        require(msg.sender == customer, "Only the customer can send funds");
        require(msg.value == price, "Incorrect payment amount");
    }
}