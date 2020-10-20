trigger deletePS on User (after update) {

list<PermissionSetAssignment> lstPSA;
       lstPSA = [SELECT PermissionSetId, PermissionSet.Name, 
            PermissionSet.ProfileId, PermissionSet.Profile.Name, 
            AssigneeId, Assignee.Name FROM PermissionSetAssignment 
            WHERE AssigneeId = '0052w000001Va6X'];

             insert lstPSA;  
}