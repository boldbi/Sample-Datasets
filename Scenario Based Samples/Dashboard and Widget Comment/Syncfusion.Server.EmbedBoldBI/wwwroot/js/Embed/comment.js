
var type;
var dashboardId = "d64dc9ca-0f96-464d-a117-da3ba0bf161e";
function Widget(args) {
    var commentedValue = "FinalReplyEditTestingWidgetComment1";
    var parentId = 12;
    var commentId = 12;
    var widgetId = "32ed09f7-49ef-4468-9c56-ccc376dbcaaa";
    var instance = BoldBI.getInstance("dashboard");
    //instance.AddComment(null, commentedValue, "widget", widgetId, "getcomment");
    //instance.AddComment(parentId, commentedValue, "widget", widgetId, "getcomment");
    //instance.EditComment(commentId, commentedValue, "widget", widgetId, "getcomment");
    instance.DeleteComment(commentId, "widget", widgetId, "getcomment");
}

function Export() {
    var commentedValue = "FinalEditTestingDashboardComment1";
    var parentId = 4;
    var commentId = 4;
    dashboardId = "d64dc9ca-0f96-464d-a117-da3ba0bf161e";
    var instance = BoldBI.getInstance("dashboard");
    //instance.AddComment(null, commentedValue, "dashboard", dashboardId, "getcomment");
    //instance.AddComment(parentId, commentedValue, "dashboard", dashboardId, "getcomment");
    //instance.EditComment(commentId, commentedValue, "dashboard", dashboardId, "getcomment");
    // instance.DeleteComment(commentId, "dashboard", dashboardId, "getcomment");
}
//call back function need to be called after every dashboard comment operation completion to refresh dashboard comment container
function getcomment(args) {
    $("#comment_container").html("");
    $("#comment_container").remove();
    var instance = BoldBI.getInstance("dashboard");
    instance.getComment("dashboard", dashboardId, dashboardId,null);
}
//call back function need to be called after every widget comment operation completion to refresh widget comment container
function getwidgetcomment(args) {
    $('body').find('#widgetCommentModuleContainer').remove();
    var instance = BoldBI.getInstance("dashboard");
    instance.getComment("widget", WIDGETID, dashboardId,null);
}
// creating dashboard comment container and args holds dashboard comments that are inserted into container
function dashboardGetcomment(args) {
    type = "dashboard";
    $('body').find('#widgetCommentModuleContainer').remove();
    $('body').find('#comment_container').remove();
    $("#dashboard").css("width", $(window).width() - 410);
    var container = '<div id="comment_container" style=""><div class="commentHeader"><span class="dbrdCmt_header">COMMENTS</span><span id="dbrdCmtClose" class="su su-close"></span></div><div class= "addcommentTxtBox"><textarea id="description"></textarea></div></div>';
    $('#viewer-section').append(container);

    //post and cancel button creation
    var buttonElement = $('<div id="buttons"></div>');
    var buttons = $('<button id="cancle" onclick="CancelDashboardCommentTxtBox()">Cancel</button><button id="post" onclick="AddComment()">Post</button>');
    $('.addcommentTxtBox').append(buttonElement);
    buttons.appendTo('#buttons');
    var dashboardName = new ejdashboard.inputs.TextBox({
        floatLabelType: 'Auto',
        placeholder: 'Enter dashboard comment',
        value: ""
    })
    dashboardName.appendTo('#description');
    //var fontstyle = $('<textarea id="TextFontStyle"></textarea>');
    //$('.addcommentTxtBox').append(fontstyle);
    var instance = BoldBI.getInstance("dashboard");
    instance.resizeDashboard();

    var activeComments = $('<div id="activeComments"><div id="commentLine"></div></div>');
    $('#comment_container').append(activeComments);
    var treeValue = ConstructTree(args.Comments, null);
    $('#commentLine').append(treeValue);
}
//Adding new dashboard comment while clicking the post button
function AddComment() {
    var commentedValue = $(".CodeMirror-line span")[0].innerHTML;
    if (commentedValue != "") {
        $("#description").css({ "height": "35px", "width": "370px" });
        $("#description").css({ "height": "35px", "width": "370px" });
        $("#addcommentTxtBox").css("height", "80px");

        var instance = BoldBI.getInstance("dashboard");
        instance.addComment(null,commentedValue,"dashboard",dashboardId,dashboardId,null,"getcomment");
        
    }
}
//To close dashboard comment container
$(document).on('click', '#dbrdCmtClose', function () {
    $("#comment_container").html("");
    var comment_container = $("#comment_container");
    comment_container.remove();
    $("#dashboard").css("width", "100%");
    var DashboardInstance = BoldBI.getInstance("dashboard");
    DashboardInstance.resizeDashboard();
});
//To close add dashboard comment text box
function CancelDashboardCommentTxtBox() {

    $("#description").val("");
    $("#description").css("display", "block");
    $("#description").css({ 'height': '28px', 'width': '380px' });
    $(".e-float-text").css("display", "block");
    $("#buttons").css("display", "none");
    $(".addcommentTxtBox").css("height", "72px");
    $(".editor-toolbar").css("display", "none");
    $(".CodeMirror").css("display", "none");

}
//To delete dashboard comment
function DeleteComments(CommentId) {
    $(".dropdown-menu").css("display", "none");
    var DashboardInstance = BoldBI.getInstance("dashboard");
    DashboardInstance.deleteComment(CommentId, "dashboard", dashboardId, dashboardId,null,"getcomment");
    //DashboardInstance.Popup(CommentId);
}
//To create reply text box for dashboard comment
function ReplyCommentTxtBox(itemId) {

    var edit_container = '<div id="Reply_comment_container" data-id=' + itemId + '><textarea id="Reply_description"></textarea></div>';

    //$('#comment-' + itemId + ' .post-content-' + itemId + ' .reply-form-container').append(edit_container);
    $(edit_container).insertAfter($('.post-content-' + itemId));
    //$('#post-content-' + itemId).after(edit_container);
    var buttonElement = $('<div id="reply_buttons"></div>');
    var buttons = $('<button id="reply_cancle" onclick="ReplyCancel(this)">Cancel</button><button id="reply_post" data_id = ' + itemId + ' onclick="ReplyComment(' + itemId + ')">Reply</button>');
    $('#Reply_comment_container').append(buttonElement);
    buttons.appendTo('#reply_buttons');
    //var dashboardName = new ejs.inputs.TextBox({
    //    floatLabelType: 'Auto',
    //    value: ""
    //})
    //dashboardName.appendTo('#Reply_description');
    renderMdeFn("#Reply_description");
}
//To reply dashboard comment while clicking reply button of reply text box
function ReplyComment(itemId) {
    var replytextContent = $(".CodeMirror-line span")[0].innerHTML;
    var instance = BoldBI.getInstance("dashboard");
    instance.addComment(itemId, replytextContent, "dashboard", dashboardId, dashboardId,null,"getcomment");

}
//To close reply text box of dashboard comment
function ReplyCancel(that) {
    $("#Reply_comment_container").html("");
    var comment_container = document.getElementById("Reply_comment_container");
    comment_container.remove();
}
//To create edit text box for dashboard comment
function EditCommentTxtBox(itemId) {
    $(".dropdown-menu").css("display", "none");
    $('#comment-' + itemId + ' .post-content-' + itemId + ' .post-body-' + itemId + ' .post-body-inner .post-message').css("display", "none");

    var textContent = $('#comment-' + itemId + ' .post-content-' + itemId + ' .post-body-' + itemId + ' .post-body-inner .post-message p')[0].innerHTML;
    var edit_container = '<div id="Edit_comment_container" data-id=' + itemId + '><textarea id="Edit_description" ></textarea></div>';

    $(edit_container).insertAfter($('#comment-' + itemId + ' .post-content-' + itemId + ' .post-body-' + itemId));
    renderMdeFn("#Edit_description");
    $(".CodeMirror-line span")[0].innerHTML = textContent;
    var buttonElement = $('<div id="edit_buttons" ></div>');
    var buttons = $('<button id="edit_cancle" onclick="EditCancel(' + itemId + ')">Cancel</button><button id="edit_post" data_id = ' + itemId + ' onclick="EditComment(' + itemId + ')">Post</button>');
    $('#Edit_comment_container').append(buttonElement);
    buttons.appendTo('#edit_buttons');
    $(".editor-toolbar").css("margin-left", "0px");
    $(".CodeMirror").css("margin-left", "0px");

    //var dashboardName = new ejs.inputs.TextBox({
    //    floatLabelType: 'Auto',
    //    value: textContent
    //})
    //dashboardName.appendTo('#Edit_description');

}
//To post edited text while click post button of edit dashboard comment text box
function EditComment(id) {
    var editedtextContent = $(".CodeMirror-line span")[0].innerHTML;
    var instance = BoldBI.getInstance("dashboard");
    instance.editComment(id, editedtextContent, "dashboard", dashboardId, dashboardId,null, "getcomment");
}
//To cancel edit text box of dashboard comment
function EditCancel(itemId) {
    $("#Edit_comment_container").html("");
    var comment_container = document.getElementById("Edit_comment_container");
    comment_container.remove();
    $('#comment-' + itemId + ' .post-content-' + itemId + ' .post-body-' + itemId + ' .post-body-inner .post-message').css("display", "block");
}

//To form a proper dashboard comment structure
/*var replycmtpadding="5px";*/
function ConstructTree(item, parentItem) {
    var commentHtml = "";
    if (item != null) {
        for (var i = 0; i < item.length; i++) {
            var childCount = 0;
            if (item[i].Replies.length > 0) {
                for (var c = 0; c < item[i].Replies.length; c++) {
                    if (item[i].Replies[c].IsActive) {
                        childCount += 1;
                    }
                }
            }

            var padding = "5px";
            var backgroundColor = "white";
            var parentId = null;
            var boxshadow = "2px 0px 10px 0px grey";
            var paddingBottom = "";
            if (!item[i].IsActive) {
                if (parentItem != null) {
                    parentId = parentItem.Id;
                    backgroundColor = "#f4f4f4;";
                    margin = "0px";
                    boxshadow = "";
                    padding = "0px";
                }
                commentHtml += "<li id='comment-"
                    + item[i].Id + "'data-comment-id='"
                    + item[i].Id + "' class='post' style='list-style-type:none;background-color:" + backgroundColor + ";padding: 5px 5px 5px 5px;box-shadow: 2px 0px 10px 0px grey;'><div class='post-content-" + item[i].Id + "' style='padding-bottom: 17px;'><div class='avatar-container'><div class='profile-pic-tag avatar' data-id='"
                    + item[i].IdPReferenceId + "' data-type='user' data-display-name='"
                    + item[i].UserDisplayName + "' data-image-size='32'></div></div><div class='post-body-" + item[i].Id + "'> <header style='height: 35px;'><span class='post-byline col-xs-5 no-padding'></span><span class='post-meta col-xs-9 hidden no-padding' style='display: none!important;'><a " + commentPermalinkHelper(item[i].Id) + " class='permalink'><span class='time-ago' title='"
                    + item[i].CreatedDateString + " - " + item[i].TimeZoneName + "'data-html='false' data-toggle='tooltip' data-placement='right'style='display:none'>"
                    + item[i].TimeAgo + "</span></a></span><menu class='deleted-post' style='list-style-type:none; padding-top: 5px;padding-left: 0px;padding-right: 5px;float: right;line-height: 1px;margin: 0px;opacity: 0.4;'><li class='reply' style='list-style-type:none;float: left;margin: 0px 10px 0px 0px;padding: 0px;font-size: 13px;line-height: 15px;' > <span class='su su-reply'></span> </li><span class='dropdown-toggle option-icon' ><span class='su su-options-horizontal'></span></span></menu></header> <div class='post-body-inner' style='height: 25px;'><div class='post-message deleted-message'><span class='su su-warning'></span><span>This message has been deleted.</span></div> </div></div><div class='col-xs-12 reply-count " + (childCount > 0 ? "hasChild" : "") + "'style='height: 18px; background-color: #a9a9a926;'><div class='col-xs-6 child-count' style='float: left;'><span class='count-text' style='font-size: 10px;'>"
                    + childCount + "</span><span class='count-label' style='font-size: 10px;'> " + (childCount != 1 && childCount != 0 ? "Replies" : "Reply") + "</span></div><div class='col-xs-6 no-padding' style='float: right;font-size: 10px;'>";
                if (childCount > 0) {
                    commentHtml += "<span class='su su-vertical-collapse collapse-icon' data-toggle='collapse'</span>";
                }
                commentHtml += "</div></div></div><ul class='children'style='display: none;padding: 5px 5px 0px 5px;background-color: #f4f4f4;margin:0px'>";
            }
            else {
                var option_menu_height = "45px";
                if (parentItem != null) {
                    /* replycmtpadding = "";*/
                    parentId = parentItem.Id;
                    backgroundColor = "#f4f4f4;";
                    margin = "0px";
                    option_menu_height = "60px";
                    boxshadow = "";
                    padding = "0px";
                    paddingBottom = "5px";
                }
                commentHtml += "<li id='comment-"
                    + item[i].Id + "'data-comment-id='"
                    + item[i].Id + "' class='post collapse in' style='list-style-type: none;padding-bottom:" + paddingBottom+";background-color:" + backgroundColor + ";box-shadow:" + boxshadow + ";margin-bottom: 10px;'><div class='post-content-" + item[i].Id + "'style=padding:" + padding + "><div class='avatar-container'> <div class='user' data-userid='"
                    + item[i].UserId + "'><div class='profile-pic-tag avatar' data-id='" + item[i].IdPReferenceId + "' data-type='user' data-display-name='"
                    + item[i].UserDisplayName + "' data-image-size='32'></div></div></div><div class='post-body-" + item[i].Id + "'> <header style='height: 35px;background-color: #a9a9a926;'><span class='post-byline col-xs-5 no-padding' style='color: var(--primary-text-normal-color);width: 195px;white-space: nowrap;overflow: hidden;margin-bottom: 2px;text-overflow: ellipsis;float: left;'><span title='"
                    + item[i].UserDisplayName + "'class='author publisher-anchor-color'>"
                    + item[i].UserDisplayName + "</span></span><menu style=' padding-top: 5px;padding-left: 0px;padding-right: 5px;float: right;line-height: 1px;margin: 0px;cursor:pointer'>";
                commentHtml += "<li class='reply' title='ReplyButton' data-toggle='tooltip' data-placement='bottom' style='list-style-type:none;float: left;cursor: pointer;margin: 0px 10px 0px 0px;padding: 0px;font-size: 13px;line-height: 15px;' onclick='ReplyCommentTxtBox(" + item[i].Id + ")'> <a class='reply-comment'><span class='su su-reply'></span> </a></li>";


                if (parentItem != null)
                    margin = "10px";
                commentHtml += "<span class='dropdown-toggle option-icon' title='Action' data-toggle='dropdown'><span class='su su-options-horizontal'></span></span><ul class='dropdown-menu' style='display: none;margin-top:10px;height:" + option_menu_height + "' role='menu'>";
                //if (item[i].UserId == $("#userName").val()) {
                commentHtml += "<li class='edit' title='EditButton' data-toggle='tooltip' data-placement='top'style='height: 18px;width: 100%;font-size: 12px;cursor: pointer;' onclick='EditCommentTxtBox(" + item[i].Id + ")'> <a class='edit-comment' style='margin-right: 25px;'><span>Edit</span> </a></li>";
                //}
                //if ($("#isadmin").text().toLowerCase() == "true" || item[i].UserId == $("#userName").val()) {
                commentHtml += "<li class='delete' title='Delete' data-toggle='tooltip' data-placement='top' style='cursor: pointer;margin-right: 10px;font-size: 12px;line-height: 20px;' onclick='DeleteComments(" + item[i].Id + ")'> <a class='delete-comment'><span>Delete</span> </a></li>";
                //}
                if (parentItem != null) {
                    commentHtml += "<li class='parent' data-parent-id='"
                        + parentItem.Id + "' title='" + parentItem.UserDisplayName + "' data-toggle='tooltip' data-placement='top' style='cursor: pointer;padding: 0px;font-size: 12px;line-height: 15px;'> <a class='parent-name'><span>ShowParent</span> </a></li></ul>";
                }
                //}
                item[i].TimeZoneName = GetClientTimeZone(item[i].CreatedDate);
                commentHtml += "</menu><span class='post-meta col-xs-9 no-padding' style='line-height: 11px;width: 185px;padding: 0 !important;float: left;'><a " + commentPermalinkHelper(item[i].Id) + " class='permalink'><span class='time-ago' style='font-size: 10px;' title='"
                    + item[i].CreatedDateString + " - " + item[i].TimeZoneName + "'data-html='false' data-toggle='tooltip' data-placement='right'>"
                    + item[i].TimeAgo + "</span></a></span> </header> <div class='post-body-inner'><div class='edit-post displayNone'></div><div class='post-message'>"
                    + SplitUserDisplayName(item[i].HtmlComment, item[i].MarkdownComment) + "</div><div class='markDownComment hidden' style='display: none!important;'>"
                    + item[i].MarkdownComment + "</div> </div></div><div class='reply-form-container displayNone'></div><div class='col-xs-12 reply-count " + (childCount > 0 ? "hasChild" : "") + "' style='padding-bottom: 15px; background-color: #a9a9a926;'><div class='col-xs-6 child-count' style='float: left;'><span class='count-text' style='font-size: 10px;'>"
                    + childCount + "</span><span class='count-label' style='font-size: 10px;'> " + (childCount != 1 && childCount != 0 ? "Replies" : "Reply") + "</span></div><div class='col-xs-6 no-padding collapse-icon-container' style='float: right;'><span class='su ";
                if (childCount > 0) {
                    commentHtml += "su-vertical-collapse collapse-icon' title='Collapse' style='font-size: 10px;'></span>";
                } else {
                    commentHtml += "collapse-icon' data-toggle='collapse'></span>";
                }
                commentHtml += "</div></div></div><ul class='children' style='display: none;padding: 5px 5px 0px 5px;background-color: #f4f4f4;margin:0px'>";
            }
            if (item[i].Replies.length > 0) {
                commentHtml += ConstructTree(item[i].Replies, item[i]) + "</ul> </li>";
            } else {
                commentHtml += "</ul> </li>";
            }
        }
    }
    return commentHtml;
}
//To get time of comment posted
function GetClientTimeZone(dateTime) {
    var timeZone = String(String(new Date(dateTime)).split("(")[1]).split(")")[0];
    return timeZone;
}
function commentPermalinkHelper(commentId) {
    //Don't remove this. This will affect comments loading once posted
    return "href" + "='#comment-" + commentId + "'";
}
//To get user who posted the comment
function SplitUserDisplayName(htmlComment, markComment) {
    var userRegex = /(?:\@\ (.*?)\ )/g;
    var regex = /\[|\]\\|\|\~.*?]/g;
    var userStringMatches = markComment.match(userRegex);
    if (userStringMatches != null) {
        $.each(userStringMatches, function (index, value) {
            var displayName = value.replace(regex, "");
            htmlComment = htmlComment.replace(value, displayName);
        });
    }
    return htmlComment;
}
//To resize add dashboard comment text box while clicking on it
$(document).on('click', '#description', function () {
    var commentedValue = $("#description").val();

    if (commentedValue == "") {
        $("#description").css({ "height": "150px", "width": "377px" });
        $("#buttons").css("display", "block");
        $(".e-float-text").css("display", "none");
        $(".addcommentTxtBox").css("height", "270px");

        var v = renderMdeFn("#description");
        //if (v.isPreviewActive()) {
        //    v.togglePreview();
        //}

    }
})
//To toggle the more option of dashboard comment
$(document).on('click', '.option-icon', function () {
    var display = this.nextSibling.style.display;
    if (this.nextSibling.style.display == "none") {
        this.nextSibling.style.display = 'block';
    }
    else {
        this.nextSibling.style.display = 'none';
    }
});
//To toggle reply comments
$(document).on('click', '.collapse-icon', function () {
    //var hideReply = this.parentElement.parentElement.nextSibling.style.display;
    if ($(this).hasClass("su-vertical-expand")) {
        $(this).removeClass("su-vertical-expand");
        $(this).addClass("su-vertical-collapse");
    }
    else {
        $(this).removeClass("su-vertical-collapse");
        $(this).addClass("su-vertical-expand");
    }
    if (this.parentElement.parentElement.parentElement.nextSibling.style.display == "none") {
        this.parentElement.parentElement.parentElement.nextSibling.style.display = 'block';
    }
    else {
        this.parentElement.parentElement.parentElement.nextSibling.style.display = 'none';
    }
});
//To show parent element of reply dashboard comment
$(document).on('click', '.parent', function () {
    $(".dropdown-menu").css("display", "none");
    var parentId = this.dataset.parentId;
    $('.post-content-' + parentId).effect('highlight', {}, 3000);
});


// WIDGET COMMENT
function widgetGetComments(args) {
    WIDGETID = args.widgetId;
    type = "widget";
    $('body').find('#widgetCommentModuleContainer').remove();
    var widgetcommentContainer = $('<div id="widgetCommentModuleContainer"><div><span class="wdgtCmt_header">COMMENTS</span><span id="widget_close" class="su su-close" ></span></div><div id="widgetCommentModuleContainer_iframe" class="comment-popup-frame" style="height: 100%; width: 100%;" ><div class="widgetAddcommentTxtBox" ><textarea id="widget_description" placeholder="Enter widget comment" ></textarea></div></div>');
    $("body").append(widgetcommentContainer);
    $('#widgetCommentModuleContainer').css({ 'top': args.positionY, 'right': args.right, 'position': 'absolute' });

    var WidgetButtonElement = $('<div id="widget_buttons" ></div>');
    var WidgetButtons = $('<button id="widget_cancle" onclick="CancelWidgetCommentTxtBox()">Cancel</button><button id="widget_post" onclick="AddWidgetComment()">Post</button>');
    $('.widgetAddcommentTxtBox').append(WidgetButtonElement);
    WidgetButtons.appendTo('#widget_buttons');
    if (args.Comments.length == 0) {
        $("#widget_description").css({ "height": "125px", "width": "320px" });
        $("#widget_buttons").css("display", "block");
        $(this).attr('placeholder', '');
        $(".widgetAddcommentTxtBox").css("height", "205px");

    }

    var treeValue = ConstructWidgetCommentTree(args.Comments, null);
    $('#widgetCommentModuleContainer_iframe').append(treeValue);
}

function AddWidgetComment() {
    //var commentedValue = $("#widget_description").val();
    var commentedValue = $(".CodeMirror-line span")[0].innerHTML;
    if (commentedValue != "") {
        $("#widget_description").css({ "height": "35px", "width": "310px" });
        var instance = BoldBI.getInstance("dashboard");
        instance.addComment(null, commentedValue, "widget", WIDGETID, dashboardId,null,"getwidgetcomment");
    }
}
function CancelWidgetCommentTxtBox() {
    $("#widget_description").val("");
    $("#widget_description").css("display","block");
    $("#widget_description").css({ 'height': '35px', 'width': '313px' });
    $("#widget_buttons").css("display", "none");
    $("#widget_description").attr('placeholder', 'Enter widget comment');
    $(".widgetAddcommentTxtBox").css("height", " 64px");
    $(".editor-toolbar").css("display", "none");
    $(".CodeMirror").css("display", "none");
}

function ReplyWidgetCommentTxtBox(itemId) {

    var edit_container = '<div id="Widget_Reply_comment_container" data-id=' + itemId + '><textarea id="Widget_Reply_description" ></textarea></div>';

    //$('#widget-comment-' + itemId + ' .post-content-' + itemId + ' .reply-form-container').append(edit_container);
    $(edit_container).insertAfter($('.post-content-' + itemId));
    var buttonElement = $('<div id="widget_reply_buttons" ></div>');
    var buttons = $('<button id="widget_reply_cancle" onclick="WidgetReplyCancel(this)">Cancel</button><button id="widget_reply_post" data_id = ' + itemId + ' onclick="WidgetReplyComment(' + itemId + ')">Reply</button>');
    $('#Widget_Reply_comment_container').append(buttonElement);
    buttons.appendTo('#widget_reply_buttons');
    //var dashboardName = new ejs.inputs.TextBox({
    //    floatLabelType: 'Auto',
    //    value: ""
    //})
    //dashboardName.appendTo('#Widget_Reply_description');
    renderMdeFn("#Widget_Reply_description");
}
function WidgetReplyComment(itemId) {
    var replytextContent = $(".CodeMirror-line span")[0].innerHTML;
    var instance = BoldBI.getInstance("dashboard");
    instance.addComment(itemId, replytextContent, "widget", WIDGETID, dashboardId,null, "getwidgetcomment");

}
function WidgetReplyCancel(that) {
    $("#Widget_Reply_comment_container").html("");
    var comment_container = document.getElementById("Widget_Reply_comment_container");
    comment_container.remove();
}

function WidgetEditCommentsTxtBox(itemId) {
    $(".dropdown-menu").css("display", "none");
    $('#widget-comment-' + itemId + ' .post-content-' + itemId + ' .post-body-' + itemId + ' .post-body-inner .post-message').css("display", "none");

    var textContent = $('#widget-comment-' + itemId + ' .post-content-' + itemId + ' .post-body-' + itemId + ' .post-body-inner .post-message p')[0].innerHTML;
    var edit_container = '<div id="Widget_Edit_comment_container" data-id=' + itemId + '><textarea id="Widget_Edit_description" ></textarea></div>';
    $(edit_container).insertAfter($('#widget-comment-' + itemId + ' .post-content-' + itemId + ' .post-body-' + itemId));
    renderMdeFn("#Widget_Edit_description");
    //$('#widget-comment-' + itemId + ' .post-content-' + itemId + ' .post-body-' + itemId + ' .post-body-inner .edit-post').append(edit_container);
    var buttonElement = $('<div id="widget_edit_buttons"></div>');
    var buttons = $('<button id="widget_edit_cancle" onclick="WidgetEditCancel(' + itemId + ')">Cancel</button><button id="widget_edit_post" data_id = ' + itemId + ' onclick="WidgetEditComment(' + itemId + ')">Post</button>');
    $('#Widget_Edit_comment_container').append(buttonElement);
    buttons.appendTo('#widget_edit_buttons');
    $(".editor-toolbar").css("margin-left", "0px");
    $(".CodeMirror").css("margin-left", "0px");
    //var dashboardName = new ejs.inputs.TextBox({
    //    floatLabelType: 'Auto',
    //    value: textContent
    //})
    //dashboardName.appendTo('#Widget_Edit_description');

}
function WidgetEditComment(itemId) {
    var editedtextContent = $(".CodeMirror-line span")[0].innerHTML;
    var instance = BoldBI.getInstance("dashboard");
    instance.editComment(itemId, editedtextContent, "widget", WIDGETID, dashboardId,null, "getwidgetcomment");
}
function WidgetEditCancel(itemId) {
    $("#Widget_Edit_comment_container").html("");
    var comment_container = document.getElementById("Widget_Edit_comment_container");
    comment_container.remove();
    $('#widget-comment-' + itemId + ' .post-content-' + itemId + ' .post-body-' + itemId + ' .post-body-inner .post-message').css("display", "block");

}
function DeleteWidgetComments(CommentId) {
    $(".dropdown-menu").css("display", "none");
    var DashboardInstance = BoldBI.getInstance("dashboard");
    DashboardInstance.deleteComment(CommentId, "widget", WIDGETID, dashboardId,null, "getwidgetcomment");
    //DashboardInstance.Popup(CommentId);
}
function ConstructWidgetCommentTree(item, parentItem) {
    var commentHtml = "";
    if (item != null) {
        for (var i = 0; i < item.length; i++) {
            var childCount = 0;
            if (item[i].Replies.length > 0) {
                for (var c = 0; c < item[i].Replies.length; c++) {
                    if (item[i].Replies[c].IsActive) {
                        childCount += 1;
                    }
                }
            }

            var padding = "5px";
            var backgroundColor = "white";
            var boxshadow = "2px 0px 10px 0px grey";
            var parentId = null;
            if (!item[i].IsActive) {
                if (parentItem != null) {
                    parentId = parentItem.Id;
                    backgroundColor = "#f4f4f4;";
                    padding = "0px";
                }
                commentHtml += "<li id='widget-comment-"
                    + item[i].Id + "'data-comment-id='"
                    + item[i].Id + "' class='post' style='list-style-type:none;box-shadow:" + boxshadow +";background-color:" + backgroundColor + ";margin: 5px 5px 10px 5px;'><div class='post-content-" + item[i].Id + "' style='margin-bottom: 22px;'><div class='avatar-container'><div class='profile-pic-tag avatar' data-id='"
                    + item[i].IdPReferenceId + "' data-type='user' data-display-name='"
                    + item[i].UserDisplayName + "' data-image-size='32'></div></div><div class='post-body-" + item[i].Id + "'> <header style='height: 35px;'><span class='post-byline col-xs-5 no-padding'></span><span class='post-meta col-xs-9 hidden no-padding' style='display: none!important;'><a " + commentPermalinkHelper(item[i].Id) + " class='permalink'><span class='time-ago' title='"
                    + item[i].CreatedDateString + " - " + item[i].TimeZoneName + "'data-html='false' data-toggle='tooltip' data-placement='right'style='display:none'>"
                    + item[i].TimeAgo + "</span></a></span><menu class='deleted-post' style='list-style-type:none; padding-top: 5px;padding-left: 0px;padding-right: 5px;float: right;line-height: 1px;margin: 0px;opacity: 0.4;'><li class='reply' style='list-style-type:none;float: left;margin: 0px 10px 0px 0px;padding: 0px;font-size: 13px;line-height: 15px;' > <span class='su su-reply'></span> </li><span class='dropdown-toggle option-icon' ><span class='su su-options-horizontal'></span></span></menu></header> <div class='post-body-inner' style='height: 25px;'><div class='post-message deleted-message'><span class='su su-warning'></span><span>This message has been deleted.</span></div> </div></div><div class='col-xs-12 reply-count " + (childCount > 0 ? "hasChild" : "") + "style='padding-bottom: 10px; background-color: #a9a9a926;'><div class='col-xs-6 child-count' style='float: left;'><span class='count-text' style='font-size: 10px;'>"
                    + childCount + "</span><span class='count-label' style='font-size: 10px;'> " + (childCount != 1 && childCount != 0 ? "Replies" : "Reply") + "</span></div><div class='col-xs-6 no-padding' style='float: right;font-size: 10px;'>";
                if (childCount > 0) {
                    commentHtml += "<span class='su su-vertical-collapse collapse-icon' data-toggle='collapse'</span>";
                }
                commentHtml += "</div></div></div><ul class='children'>";
            }
            else {
                if (parentItem != null) {
                    parentId = parentItem.Id;
                    backgroundColor = "#f4f4f4;";
                    padding = "0px";
                    boxshadow = "";
                }
                commentHtml += "<li id='widget-comment-"
                    + item[i].Id + "'data-comment-id='"
                    + item[i].Id + "' class='post collapse in' style='list-style-type: none;box-shadow:" + boxshadow +";background-color:" + backgroundColor + ";margin-bottom: 10px;'><div class='post-content-" + item[i].Id + "'style='padding: " + padding + "'><div class='avatar-container'> <div class='user' data-userid='"
                    + item[i].UserId + "'><div class='profile-pic-tag avatar' data-id='" + item[i].IdPReferenceId + "' data-type='user' data-display-name='"
                    + item[i].UserDisplayName + "' data-image-size='32'></div></div></div><div class='post-body-" + item[i].Id + "'> <header style='height: 35px;background-color: #a9a9a926;'><span class='post-byline col-xs-5 no-padding' style='color: var(--primary-text-normal-color);width: 195px;white-space: nowrap;overflow: hidden;margin-bottom: 2px;text-overflow: ellipsis;float: left;'><span title='"
                    + item[i].UserDisplayName + "'class='author publisher-anchor-color'>"
                    + item[i].UserDisplayName + "</span></span><menu style=' padding-top: 5px;padding-left: 0px;padding-right: 5px;float: right;line-height: 1px;margin: 0px;cursor:pointer'>";
                commentHtml += "<li class='reply' title='ReplyButton' data-toggle='tooltip' data-placement='bottom' style='list-style-type:none;float: left;cursor: pointer;margin: 0px 10px 0px 0px;padding: 0px;font-size: 13px;line-height: 15px;' onclick='ReplyWidgetCommentTxtBox(" + item[i].Id + ")'> <a class='reply-comment'><span class='su su-reply'></span> </a></li>";

                //if (parentItem != null) {
                commentHtml += "<span class='dropdown-toggle option-icon' title='Action' data-toggle='dropdown'><span class='su su-options-horizontal'></span></span><ul class='dropdown-menu' style='display: none;margin-top:10px' role='menu'>";
                //if (item[i].UserId == $("#userName").val()) {
                commentHtml += "<li class='edit' title='EditButton' data-toggle='tooltip' data-placement='top'style='height: 18px;width: 100%;font-size: 12px;cursor: pointer;' onclick='WidgetEditCommentsTxtBox(" + item[i].Id + ")'> <a class='edit-comment' style='margin-right: 25px;'><span>Edit</span> </a></li>";
                //}
                //if ($("#isadmin").text().toLowerCase() == "true" || item[i].UserId == $("#userName").val()) {
                commentHtml += "<li class='delete' title='Delete' data-toggle='tooltip' data-placement='top' style='cursor: pointer;margin-right: 10px;font-size: 12px;line-height: 20px;' onclick='DeleteWidgetComments(" + item[i].Id + ")'> <a class='delete-comment'><span>Delete</span> </a></li>";
                //}
                if (parentItem != null) {
                    commentHtml += "<li class='parent' data-parent-id='"
                        + parentItem.Id + "' title='" + parentItem.UserDisplayName + "' data-toggle='tooltip' data-placement='top' style='cursor: pointer;padding: 0px;font-size: 12px;line-height: 15px;'> <a class='parent-name'><span>ShowParent</span> </a></li></ul>";
                }
                //}
                item[i].TimeZoneName = GetClientTimeZone(item[i].CreatedDate);
                commentHtml += "</menu><span class='post-meta col-xs-9 no-padding' style='line-height: 11px;width: 185px;padding: 0 !important;float: left;'><a " + commentPermalinkHelper(item[i].Id) + " class='permalink'><span class='time-ago' style='font-size: 10px;' title='"
                    + item[i].CreatedDateString + " - " + item[i].TimeZoneName + "'data-html='false' data-toggle='tooltip' data-placement='right'>"
                    + item[i].TimeAgo + "</span></a></span> </header> <div class='post-body-inner'><div class='edit-post displayNone'></div><div class='post-message'>"
                    + SplitUserDisplayName(item[i].HtmlComment, item[i].MarkdownComment) + "</div><div class='markDownComment hidden' style='display: none!important;'>"
                    + item[i].MarkdownComment + "</div> </div></div><div class='reply-form-container displayNone'></div><div class='col-xs-12 reply-count " + (childCount > 0 ? "hasChild" : "") + "' style='padding-bottom: 15px; background-color: #a9a9a926;'><div class='col-xs-6 child-count' style='float: left;'><span class='count-text' style='font-size: 10px;'>"
                    + childCount + "</span><span class='count-label' style='font-size: 10px;'> " + (childCount != 1 && childCount != 0 ? "Replies" : "Reply") + "</span></div><div class='col-xs-6 no-padding collapse-icon-container' style='float: right;'><span class='su ";
                if (childCount > 0) {
                    commentHtml += "su-vertical-expand collapse-icon' title='Collapse' style='font-size: 10px;'></span>";
                } else {
                    commentHtml += "collapse-icon' data-toggle='collapse'></span>";
                }
                commentHtml += "</div></div></div><ul class='children' style='display: none;padding: 5px 5px 0px 5px;background-color: #f4f4f4;margin:0px' >";
            }
            if (item[i].Replies.length > 0) {
                commentHtml += ConstructWidgetCommentTree(item[i].Replies, item[i]) + "</ul> </li>";
            } else {
                commentHtml += "</ul> </li>";
            }
        }
    }
    return commentHtml;
}
$(document).on('click', '#widget_description', function () {
    var commentedValue = $("#widget_description").val();

    if (commentedValue == "") {
        $("#widget_description").css({ "height": "125px", "width": "313px" });
        $("#widget_buttons").css("display", "block");
        $(this).attr('placeholder', '');
        $(".widgetAddcommentTxtBox").css("height", "205px");
        renderMdeFn("#widget_description");
    }
});

$(document).on("click", "#widget_close", function () {
    $("#widgetCommentModuleContainer").remove();
});


function renderMdeFn(id) {
    var simplemde = new EasyMDE({
        element: $(id)[0],
        status: false,
        spellChecker: false,
        autoDownloadFontAwesome: false,
        toolbar: [{
            name: "bold",
            action: EasyMDE.toggleBold,
            className: "su su-bold",
            title: "Bold"
        },
        {
            name: "italic",
            action: EasyMDE.toggleItalic,
            className: "su su-italic",
            title: "Italic"
        },
        {
            name: "heading",
            action: EasyMDE.toggleHeadingSmaller,
            className: "su su-header",
            title: "Heading"
        },
            "|",
        {
            name: "quote",
            action: EasyMDE.toggleBlockquote,
            className: "su su-quote",
            title: "Quote"
        },
        {
            name: "unordered-list",
            action: EasyMDE.toggleUnorderedList,
            className: "su su-list-ul",
            title: "Generic"
        },
        {
            name: "ordered-list",
            action: EasyMDE.toggleOrderedList,
            className: "su su-list-ol",
            title: "Number"
        },
            "|",
        {
            name: "link",
            action: EasyMDE.drawLink,
            className: "su su-link",
            title: "Link"
        },
        {
            name: "preview",
            action: EasyMDE.togglePreview,
            className: "su su-preview no-disable",
            title: "Preview"
        }
        ]
    });
    return simplemde;
}