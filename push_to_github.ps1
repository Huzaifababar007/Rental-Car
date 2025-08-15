# PowerShell script to push to GitHub
$env:GIT_PAGER="cat"

Write-Host "Setting up for new repository..." -ForegroundColor Green

# Remove existing remote and add new one
& "C:\Program Files\Git\bin\git.exe" remote remove origin
& "C:\Program Files\Git\bin\git.exe" remote add origin https://github.com/Huzaifababar007/Rental-Car.git

Write-Host "`nChecking current status..." -ForegroundColor Green
& "C:\Program Files\Git\bin\git.exe" status

Write-Host "`nAdding all project files..." -ForegroundColor Green
& "C:\Program Files\Git\bin\git.exe" add .

Write-Host "`nCommitting all changes..." -ForegroundColor Green
& "C:\Program Files\Git\bin\git.exe" commit -m "Initial commit: Complete rental car website with React"

Write-Host "`nPushing to new repository..." -ForegroundColor Green
& "C:\Program Files\Git\bin\git.exe" push -u origin master

Write-Host "`nSuccess! Your rental car project is now on GitHub!" -ForegroundColor Green
