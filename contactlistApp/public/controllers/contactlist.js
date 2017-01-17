/**
 * Created by user on 12/4/2016.
 */
var myApp = angular.module('myApp',[]);

myApp.controller('appCtrl' , function($scope,$q,contactListFctr){
    var contactVm = this;
    var refresh = function () {
        contactListFctr.getContactList().then(function(response){
            console.log("Data Received ",response);
            contactVm.contactList = response;
            contactVm.contact="";
        },function(error){
        });
    };

    refresh();

    contactVm.addContact = function(contact){
        console.log(contact);
        contactListFctr.postContact(contact).then(function (res) {
            console.log(res);
            refresh();
        },function (error) {
            console.log(error);
        });
    }
});