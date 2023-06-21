import React from 'react';
import { Button, Card, CardBody } from 'reactstrap';
import Fade from 'react-reveal/Fade';
import { FeedbackType } from '../types/sections';

const FeedbackCard = ({ name, desc, link }: FeedbackType) => {
  return (
    <Fade bottom duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
      <CardBody>
            <div className="d-flex px-3">
              <div className="pl-4">
                <h3>{name}</h3>
                <p className="description mt-3">{desc}</p>
                {link ? (
                  <Button
                    className="btn-icon"
                    color="info"
                    href={link}
                    target="_blank"
                    rel="noopener"
                    aria-label="Twitter"
                  >
                    <span className="btn-inner--icon">
                      <i className="fa fa-arrow-right mr-2" />
                    </span>
                    <span className="nav-link-inner--text ml-1">View</span>
                  </Button>
                ) : null}
              </div>
            </div>
          </CardBody>
      </Card>
    </Fade>
  );
};

export default FeedbackCard;
