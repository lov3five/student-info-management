// Library fake data
import { faker } from '@faker-js/faker';

const students = [...Array(24)].map((_, index) => ({
    id: index+1,
    avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
    name: faker.name.fullName(),
    email: faker.internet.email(),
}));

export default students;