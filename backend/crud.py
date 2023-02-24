from sqlalchemy.orm import Session
from models import LockalModel


def get_from_pk(db: Session, pk: int):
    return db.query(LockalModel).filter(LockalModel.pk == pk).first()

def get_places(db: Session, *args, **kwargs):
    result = db.query(LockalModel)
    if kwargs["city"]:
        result = result.filter(LockalModel.city == kwargs["city"])
    if kwargs["frome"] and kwargs["to"]:
        result = result.filter(LockalModel.price.between(kwargs["frome"], kwargs["to"]))
    if kwargs["frome"]:
        result = result.filter(LockalModel.price >= kwargs["frome"])
    if kwargs["to"]:
        result = result.filter(LockalModel.price <= kwargs["to"])

    return result.all()
