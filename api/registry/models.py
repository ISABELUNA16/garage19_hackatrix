from django.db import models

# Create your models here.
class tb_area(models.Model):
    id_area = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    description = models.TextField()

class tb_company(models.Model):
    id_company = models.AutoField(primary_key=True)
    id_area = reporter = models.ForeignKey(tb_area, on_delete=models.CASCADE)
    business_name = models.CharField(max_length=255)
    RUC = models.CharField(max_length=25)
    phone = models.IntegerField()
    email = models.CharField(max_length=30)
    description = models.TextField()
    start_register = models.DateTimeField()

class tb_group(models.Model):
    id_group = models.AutoField(primary_key=True)
    id_area = reporter = models.ForeignKey(tb_area, on_delete=models.CASCADE)
    name_group = models.CharField(max_length=255)
    description = models.TextField()
    start_register = models.DateTimeField()
    email = models.CharField(max_length=30)

class tb_person(models.Model):
    id_person = models.AutoField(primary_key=True)
    id_group = reporter = models.ForeignKey(tb_group, on_delete=models.CASCADE)
    firstname_person = models.CharField(max_length=255)
    lastname_person = models.CharField(max_length=255)
    date_birth = models.DateTimeField()
    address = models.CharField(max_length=255)
    province = models.CharField(max_length=100)
    district = models.CharField(max_length=100)
    country = models.CharField(max_length=250)
    criminal_record = models.CharField(max_length=250)
    description = models.TextField()
    start_register = models.DateTimeField()
    DNI = models.IntegerField()
