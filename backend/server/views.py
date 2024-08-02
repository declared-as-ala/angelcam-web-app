import datetime
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests
from django.http import JsonResponse
from rest_framework.decorators import api_view
import jwt

# Secret key for JWT encoding/decoding
SECRET_KEY = "your_secret_key_here"  # Replace with your actual secret key


class TesView(APIView):
    def get(self, request, *args, **kwargs):
        data = "Hello World"
        return Response(data)


@api_view(["POST"])
def login(request):
    token = request.data.get("token")
    if not token:
        return JsonResponse({"error": "Token is required"}, status=400)

    headers = {"Authorization": f"PersonalAccessToken {token}"}
    response = requests.get("https://api.angelcam.com/v1/me", headers=headers)

    if response.status_code == 200:
        user_data = response.json()
        payload = {
            "id": user_data["id"],
            "email": user_data["email"],
            "exp": datetime.datetime.utcnow()
            + datetime.timedelta(days=1),  # Token expires in 1 day
        }
        jwt_token = jwt.encode(payload, SECRET_KEY, algorithm="HS256")

        response_data = {
            "user": user_data,
        }

        response = JsonResponse(response_data)
        response.set_cookie(key="jwt", value=jwt_token, httponly=True, samesite="Lax")
        return response
    else:
        return JsonResponse(
            {"error": "Invalid token or login failed"}, status=response.status_code
        )
