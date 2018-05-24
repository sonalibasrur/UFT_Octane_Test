'Open Easy Techmahindra


SystemUtil.Run "iexplore.exe","https://easy.techmahindra.com/easylogin.aspx"

Wait(5)


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


