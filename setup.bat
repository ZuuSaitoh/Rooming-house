@echo off
echo ===================================================
echo   AN NHIEN HOUSE - REACTJS SETUP SCRIPT
echo ===================================================
echo.
echo Script nay se di chuyen thu muc assets vao thu muc public de Vite load anh dong.
echo.

if not exist "public" (
    echo [1/2] Tao thu muc public...
    mkdir public
) else (
    echo [1/2] Thu muc public da ton tai.
)

if exist "assets" (
    echo [2/2] Dang di chuyen thu muc assets vao public...
    move assets public\assets
) else (
    echo [2/2] Thu muc assets da duoc di chuyen hoac khong tim thay.
)

echo.
echo ===================================================
echo   Setup hoan tat!
echo   Hay chay lenh 'npm install' va 'npm run dev' de khoi dong.
echo ===================================================
pause
