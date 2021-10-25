from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Contact
from .serializers import ContactSerializer
# Create your views here.

class ContactCreateview(APIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def post(self, request, *args, **kwargs):
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    


class ContactListView(APIView):
    def get(self, request):
        contact = Contact.objects.all()
        serializer = ContactSerializer(contact, many=True)
        return Response(serializer.data)


class ContactDeleteView(APIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def delete(self, request, contact_id, format=None):
        contact = Contact.objects.get(pk=contact_id)
        contact.delete()
        return Response(
            {"message": f"contact with id {contact_id} has been deleted successfully"},
            status=status.HTTP_204_NO_CONTENT
        )