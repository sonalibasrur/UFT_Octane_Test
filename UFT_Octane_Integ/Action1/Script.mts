﻿'Date : 16.05.2018
'Decription : Orange HRM Application test scenario


Systemutil.CloseProcessByName "iexplore.exe"

'Launch Application

'SystemUtil.Run "iexplore.exe", "http://127.0.0.1/orangehrm/symfony/web/index.php/auth/login"

SystemUtil.Run "iexplore.exe", "http://opensource.demo.orangehrmlive.com/index.php/auth/login"

Do Until Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebButton("html id:=btnLogin").Exist(1)
Loop


'Login into Application

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=txtUsername").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=txtUsername").Set "Admin"
   Reporter.ReportEvent micPass,"Username Set","Successfully Set" 
 Else
   Reporter.ReportEvent micFail,"Username Set","Username/Object does not exist"
End If

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=txtPassword").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=txtPassword").SetSecure "5b051c35be3517e6cada111aa95cf7ba"'"5b005ccbe5c8a2f35ee86f922906d5709d536f1d67bc"' "admin123"
   Reporter.ReportEvent micPass,"Password Set","Successfully Set"
 Else
   Reporter.ReportEvent micFail,"Password Set","Password/Object does not exist"
End If

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebButton("html id:=btnLogin").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebButton("html id:=btnLogin").Click   
   Reporter.ReportEvent micPass,"Login Button Click","Successfully Clicked"
Else
   Reporter.ReportEvent micFail,"Login Button Click","Login Button does not exist"
End If


Wait(2)

'Add an Employee   
   
If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").Link("name:=PIM").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").Link("name:=PIM").Click
   Reporter.ReportEvent micPass,"PIM Link Click","Successfully Clicked"
 Else
   Reporter.ReportEvent micFail,"PIM Link Click","Link does not exist"
   
End If @@ hightlight id_;_Browser("Browser").Page("OrangeHRM").WebEdit("firstName")_;_script infofile_;_ZIP::ssf3.xml_;_

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").Link("html id:=menu_pim_addEmployee").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").Link("html id:=menu_pim_addEmployee").Click
   Reporter.ReportEvent micPass,"Add Employee Link Click","Successfully Clicked"
 Else
   Reporter.ReportEvent micFail,"Add Employee Link Click","Link does not exist"
   
End If

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=firstName").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=firstName").Set "Josh"
   Reporter.ReportEvent micPass,"First Name Set","Successfully Set" 
 Else
   Reporter.ReportEvent micFail,"First Name Set","First Name/Object does not exist"
End If

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=lastName").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=lastName").Set "Bryan"
   Reporter.ReportEvent micPass,"Last Name Set","Successfully Set" 
 Else
   Reporter.ReportEvent micFail,"Last Name Set","Last Name/Object does not exist"
End If

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebCheckBox("html id:=chkLogin").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebCheckBox("html id:=chkLogin").Set "ON"
   Reporter.ReportEvent micPass,"Check box Set","Successfully Set" 
 Else
   Reporter.ReportEvent micFail,"Check box Set","Check box does not exist"
End If

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=user_name").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=user_name").Set "JBryan"
   Reporter.ReportEvent micPass,"User Name Set","Successfully Set" 
 Else
   Reporter.ReportEvent micFail,"User Name Set","User Name/Object does not exist"
End If

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=user_password").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=user_password").SetSecure "5b005ccbe5c8a2f35ee86f922906d5709d536f1d67bc"' "admin123"
   Reporter.ReportEvent micPass,"User Password Set","Successfully Set"
 Else
   Reporter.ReportEvent micFail,"User Password Set","User Password/Object does not exist"
End If

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=re_password").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=re_password").SetSecure "5b005ccbe5c8a2f35ee86f922906d5709d536f1d67bc"' "admin123"
   Reporter.ReportEvent micPass,"Confirm Password Set","Successfully Set"
 Else
   Reporter.ReportEvent micFail,"Confirm Password Set","Confirm Password/Object does not exist"
End If

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebButton("html id:=btnSave").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebButton("html id:=btnSave").Click   
   Reporter.ReportEvent micPass,"Save Button Click","Successfully Clicked"
Else
   Reporter.ReportEvent micFail,"Save Button Click","Save Button does not exist"
End If

'Delete an Employee

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").Link("name:=PIM").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").Link("name:=PIM").Click
   Reporter.ReportEvent micPass,"PIM Link Click","Successfully Clicked"
 Else
   Reporter.ReportEvent micFail,"PIM Link Click","Link does not exist"
   
End If

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").Link("html id:=menu_pim_viewEmployeeList").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").Link("html id:=menu_pim_viewEmployeeList").Click
   Reporter.ReportEvent micPass,"Employee List Link Click","Successfully Clicked"
 Else
   Reporter.ReportEvent micFail,"Employee List Link Click","Link does not exist"
   
End If

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebCheckBox("html id:=ohrmList_chkSelectAll").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebCheckBox("html id:=ohrmList_chkSelectAll").Set "ON"
   Reporter.ReportEvent micPass,"Select Check box Set","Successfully Set" 
 Else
   Reporter.ReportEvent micFail,"Select Check box Set","Check box does not exist"
End If

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebButton("html id:=btnDelete").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebButton("html id:=btnDelete").Click   
   Reporter.ReportEvent micPass,"Delete Button Click","Successfully Clicked"
Else
   Reporter.ReportEvent micFail,"Delete Button Click","Delete Button does not exist"
End If

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebButton("html id:=dialogDeleteBtn").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebButton("html id:=dialogDeleteBtn").Click   
   Reporter.ReportEvent micPass,"Dialog Delete Button Click","Successfully Clicked"
Else
   Reporter.ReportEvent micFail,"Dialog Delete Button Click","Delete Button does not exist"
End If

Wait(8)

'Verification

Dim expRes, actRes

expRes = "No Records Found"

'For outside techm network

'If Browser("openurl:=http://127.0.0.1/orangehrm/symfony/web/index.php/pim/viewEmployeeList").Page("title:=OrangeHRM").WebElement("innertext:=No Records Found").Exist Then
'
'
'	actRes = Browser("openurl:=http://127.0.0.1/orangehrm/symfony/web/index.php/pim/viewEmployeeList").Page("title:=OrangeHRM").WebElement("innertext:=No Records Found").GetROProperty("innertext")
'	
'	If Trim(actRes) = Trim(expRes) Then
'		
'		Reporter.ReportEvent micPass,"Verification","Successfully Verified  " & actRes
'	Else
'		Reporter.ReportEvent micFail,"Verification","Verification failed"
'	End If
'End If
'

'For outside techm network


	If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebElement("innertext:=No Records Found").Exist Then

	  actRes = Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").WebElement("innertext:=No Records Found").GetROProperty("innertext")
	
	If Trim(actRes) = Trim(expRes) Then
		
		Reporter.ReportEvent micPass,"Verification","Successfully Verified  " & actRes
	Else
		Reporter.ReportEvent micFail,"Verification","Verification failed"
	End If
End If

'Logout

'For outside techm network

'If Browser("openurl:=http://127.0.0.1/orangehrm/symfony/web/index.php/pim/viewEmployeeList").Page("title:=OrangeHRM").Link("html id:=welcome").Exist Then
'   Browser("openurl:=http://127.0.0.1/orangehrm/symfony/web/index.php/pim/viewEmployeeList").Page("title:=OrangeHRM").Link("html id:=welcome").Click
'   Reporter.ReportEvent micPass,"Welcome Link Click","Successfully Clicked"
' Else
'   Reporter.ReportEvent micFail,"Welcome Link Click","Link does not exist"
'   
'End If
'
'If Browser("openurl:=http://127.0.0.1/orangehrm/symfony/web/index.php/pim/viewEmployeeList").Page("title:=OrangeHRM").Link("name:=Logout").Exist Then
'   Browser("openurl:=http://127.0.0.1/orangehrm/symfony/web/index.php/pim/viewEmployeeList").Page("title:=OrangeHRM").Link("name:=Logout").Click
'   Reporter.ReportEvent micPass,"Logout Link Click","Successfully Clicked"
' Else
'   Reporter.ReportEvent micFail,"Logout Link Click","Link does not exist"
'   
'End If

'For outside techm network


If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").Link("html id:=welcome").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").Link("html id:=welcome").Click
   Reporter.ReportEvent micPass,"Welcome Link Click","Successfully Clicked"
 Else
   Reporter.ReportEvent micFail,"Welcome Link Click","Link does not exist"
   
End If

If Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").Link("name:=Logout").Exist Then
   Browser("opentitle:=OrangeHRM").Page("title:=OrangeHRM").Link("name:=Logout").Click
   Reporter.ReportEvent micPass,"Logout Link Click","Successfully Clicked"
 Else
   Reporter.ReportEvent micFail,"Logout Link Click","Link does not exist"
   
End If


'Close the browser

Systemutil.CloseProcessByName "iexplore.exe"

