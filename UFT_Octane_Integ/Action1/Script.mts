'Date : 16.05.2018

SystemUtil.Run "iexplore.exe", "http://127.0.0.1/orangehrm/symfony/web/index.php/auth/login"

'Wait(10)

Do Until Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebButton("html id:=btnLogin").Exist

	Wait(1)
Loop

If Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=txtUsername").Exist Then
   Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=txtUsername").Set "sadmin123"
End If

If Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=txtPassword").Exist Then
   Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebEdit("html id:=txtPassword").Set "admin123"
End If

If Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebButton("html id:=btnLogin").Exist Then
   Browser("name:=OrangeHRM").Page("title:=OrangeHRM").WebButton("html id:=btnLogin").Click
End If
