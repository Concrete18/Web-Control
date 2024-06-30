from flask import Blueprint

from utils.power import Power

misc = Blueprint("misc", __name__, url_prefix="/api")

power = Power()

# TODO add timed shutdown


@misc.route("/power/<action>", methods=["POST"])
def power_control(action):
    match action:
        case "shutdown":
            power.shutdown()
        case "sleep":
            power.sleep()
        case _:
            return "invalid parameter", 422
    return action, 200
