# Dashboard and widget comment sample in Embedding 

This application aims to demonstrate how to add, edit, and delete BoldBI dashboard and widget comments in JavaScript embedding.

### Embed properties

Need to change the RootURL,siteIdentifier,dashboardID and EmbedScret.

![embedproperties](https://github.com/boldbi/samples/assets/149993554/52b85eec-d877-4ddd-b9aa-61669751ec4a)

## Dashboard Actions

### Add Dashboard or Widget Comments

1. After clicking the dashboard comment icon, getcomment method will be called to get all the comments. Here is the code snippet of the getcomments API.

![getComment-img](https://github.com/boldbi/samples/assets/149993554/2658e031-9440-403c-9cba-c665281f0afb)

2. Inorder to post a comment, the AddComment method will be called. Here is the code snippet of the AddDashboardComment API

![addDashboardComment-img](https://github.com/boldbi/samples/assets/149993554/56e3bc46-4ac5-4241-898f-f5655a0f507c)

### Edit Dashboard or Widget comments

After clicking the Edit icon, the EditComment method will be called to edit the respective comment by its ID. Here is the code snippet for the editDashboardComment API.

![editDashboardComment-img](https://github.com/boldbi/samples/assets/149993554/22d831f3-9c9a-498b-a63f-aa0111ba7a74)

### Delete Dashboard or Widget comments

After clicking the delete icon, the DeleteComments method will be called to delete the respective comment by its ID. Here is the code snippet for the DeleteDashboardComments API.

![deleteDashboardComment-img](https://github.com/boldbi/samples/assets/149993554/655b8057-3606-40f5-9b51-f4afd6fd07b4)



