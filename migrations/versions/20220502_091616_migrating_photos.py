"""migrating photos

Revision ID: 6359fd734d25
Revises: ffdc0a98111c
Create Date: 2022-05-02 09:16:16.970490

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '6359fd734d25'
down_revision = 'ffdc0a98111c'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('photos',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('photo_url', sa.String(), nullable=False),
    sa.Column('caption', sa.String(length=255), nullable=True),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('photos')
    # ### end Alembic commands ###