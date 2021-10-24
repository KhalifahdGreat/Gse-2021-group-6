from django.db import models

# Create your models here.
class Contact(models.Model):
    company_name = models.CharField(max_length=200)
    company_email = models.EmailField()
    company_message = models.TextField()

    def __str__(self):
        return self.company_name