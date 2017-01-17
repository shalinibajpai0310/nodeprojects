/**
 * Created by user on 12/4/2016.
 */
myApp.factory('contactListFctr',function($http,$q){
    return {
        getContactList : getContactList,
        postContact : postContact
    };

    function getContactList(){
        var defer = $q.defer();
        var httpOptions={
            method:'GET',
            url:'/contactlist'
        };
        $http(httpOptions).then(function (response) {
            defer.resolve(response.data);
        },function (error) {
            console.log("Error ",error);
            defer.reject();
        });
        return defer.promise;
    }

    function  postContact(contact) {
        var defer = $q.defer();
        var httpOptions = {
            method : 'POST',
            url : '/contactlist',
            data : contact
        };

        $http(httpOptions).then(function (res) {
            defer.resolve(res.data);
        },function (error) {
            defer.reject();
        });
        return defer.promise;
    }

});