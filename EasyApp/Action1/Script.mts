'Open Easy Techmahindra

SystemUtil.Run "iexplore.exe","https://easy.techmahindra.com/easylogin.aspx"

For i = 1 To 50

 If Browser("name:=EASY - Login").Page("title:=EASY - Login").WebEdit("html id:=txtLanId").Exist(1) Then
  Exit For
 End If
	
Next

'Login 

If Browser("name:=EASY - Login").Page("title:=EASY - Login").WebEdit("html id:=txtLanId").Exist Then
   Browser("name:=EASY - Login").Page("title:=EASY - Login").WebEdit("html id:=txtLanId").Set "SB0068667"
   Reporter.ReportEvent micPass,"Username Set","Successfully Set" 
 Else
   Reporter.ReportEvent micFail,"Username Set","Username/Object does not exist"
End If

If Browser("name:=EASY - Login").Page("title:=EASY - Login").WebEdit("html id:=txtPassword").Exist Then
   Browser("name:=EASY - Login").Page("title:=EASY - Login").WebEdit("html id:=txtPassword").SetSecure "5b069acd9a1d41aa2bf78fe2496f0d09e962cefe29e9025b9082acb46e1ea1a1"
   Reporter.ReportEvent micPass,"Password Set","Successfully Set"
 Else
   Reporter.ReportEvent micFail,"Password Set","Password/Object does not exist"
End If

If Browser("name:=EASY - Login").Page("title:=EASY - Login").WebButton("html id:=btnlogin").Exist Then
   Browser("name:=EASY - Login").Page("title:=EASY - Login").WebButton("html id:=btnlogin").Click   
   Reporter.ReportEvent micPass,"Login Button Click","Successfully Clicked"
Else
   Reporter.ReportEvent micFail,"Login Button Click","Login Button does not exist"
End If

If Browser("opentitle:=EASY - Login").Page("title:=EASY - Easy Access System For You").WebButton("html id:=lnkLogout1").Exist Then	
	Browser("opentitle:=EASY - Login").Page("title:=EASY - Easy Access System For You").WebButton("html id:=lnkLogout1").Click   
     Reporter.ReportEvent micPass,"Logout Button Click","Successfully Clicked"
Else
   Reporter.ReportEvent micFail,"Logout Button Click","Logout Button does not exist"
End If

'Close the browser

If Browser("name:=EASY - Easy Access System For You").Dialog("regexpwndtitle:=Message from webpage").WinButton("regexpwndtitle:=OK").Exist Then

   Browser("name:=EASY - Easy Access System For You").Dialog("regexpwndtitle:=Message from webpage").WinButton("regexpwndtitle:=OK").Click
   
   Reporter.ReportEvent micPass,"OK Button Click","Successfully Clicked"
Else
   Reporter.ReportEvent micFail,"OK Button Click","OK Button does not exist"
   
End If


