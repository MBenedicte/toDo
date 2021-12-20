import db from "./database/models";
import * as statusCode from "./statusCodes";

export const asyncHandler = (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
  } catch (error) {
    console.log(error);
    res.status(SERVER_ERROR).json({
      errors: {
        status: SERVER_ERROR,
        error: {
          message: "Server error",
        },
      },
    });
  }
};

export const checkActivity = async (req, res, next) => {
  const {
    params: { id },
    body: { title },
  } = req;
  const condition = title ? { title } : { id };

  const activity = await db.Activity.findOne({
    where: condition,
    logging: false,
  });

  const activityExist = activity !== null ? true : false;

  activityExist
    ? res.status(statusCode.CONFLICT).send({
        error: {
          status: statusCode.CONFLICT,
          message: "activity already exist",
        },
      })
    : next();
};

export const createActivity = async (req, res) => {
  const {
    body: { title },
  } = req;
  const activity = await db.Activity.create({ title, logging: false });

  res.send({
    response: {
      status: statusCode.CREATED,
      message: `Activity created successfully`,
      data: activity,
    },
  });
};

export const editActivity = async (req, res) => {
  const {
    params: { id },
    body: { title },
  } = req;

  const checkActivityId = await db.Activity.findOne({
    where: { id },
    logging: false,
  });

  const checkActivitytTitle = await db.Activity.findOne({
    where: { title },
    logging: false,
  });

  if (checkActivityId === null || checkActivityId === undefined) {
    res.send({
      error: {
        status: statusCode.NOT_FOUND,
        message: `This activity with id does not exist `,
      },
    });
  }
  if (
    checkActivitytTitle == null ||
    checkActivitytTitle.id === checkActivityId.id
  ) {
    const activity = await db.Activity.update(
      { title },
      { where: { id }, returning: true }
    ).then(() => db.Activity.findOne({ where: { id }, logging: false }));

    res.send({
      response: {
        status: statusCode.OK,
        message: `Activity updated successfully`,
        data: activity,
      },
    });
  } else if (checkActivitytTitle != null) {
    res.status(statusCode.CONFLICT).send({
      error: {
        status: statusCode.CONFLICT,
        message: `This activity title already exist`,
      },
    });
  } else {
    res.status(statusCode.SERVER_ERROR).send({
      error: {
        status: statusCode.SERVER_ERROR,
        message: `Something is wrong`,
      },
    });
  }
};

export const findOneActivity = async (req, res) => {
  const {
    params: { id },
  } = req;

  const activity = await db.Activity.findOne({ where: { id }, logging: false });
  activity != null || activity != undefined
    ? res.send({
        response: {
          status: statusCode.OK,
          message: `Activity found successfully`,
          data: activity,
        },
      })
    : res.send({
        error: {
          status: statusCode.NOT_FOUND,
          message: `This activity does not exist `,
        },
      });
};

export const findAllActivities = async (req, res) => {
  const activities = await db.Activity.findAll({ logging: false });
  activities.length === 0 || activities === null
    ? res.send({
        error: {
          status: statusCode.NO_CONTENT,
          message: `No activities found`,
        },
      })
    : res.send({
        response: {
          status: statusCode.OK,
          message: `Activities found successfully`,
          data: activities,
        },
      });
};

